"use client";

import { useEffect, useRef } from "react";

export default function FlowChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Color palette - simplified and more minimal
    const colors = {
      purple: { light: "#F3E8FF", main: "#A855F7", dark: "#7E22CE" },
      gray: { light: "#F3F4F6", main: "#6B7280", dark: "#374151" },
    };

    // Define employee positions - adjusted for better responsive layout
    const getEmployeePositions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        return [
          { x: 0.7, y: 0.2 },
          { x: 0.7, y: 0.4 },
          { x: 0.7, y: 0.6 },
          { x: 0.7, y: 0.8 },
        ];
      } else if (width < 1024) {
        // Tablet
        return [
          { x: 0.75, y: 0.2 },
          { x: 0.75, y: 0.4 },
          { x: 0.75, y: 0.6 },
          { x: 0.75, y: 0.8 },
        ];
      }
      // Desktop
      return [
        { x: 0.8, y: 0.2 },
        { x: 0.8, y: 0.4 },
        { x: 0.8, y: 0.6 },
        { x: 0.8, y: 0.8 },
      ];
    };

    // Get node positions based on screen size
    const getNodePositions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        return {
          employer: 0.3,
          pool: 0.5,
        };
      } else if (width < 1024) {
        return {
          employer: 0.25,
          pool: 0.5,
        };
      }
      return {
        employer: 0.2,
        pool: 0.5,
      };
    };

    // Get node and font sizes based on screen size
    const getScaledSizes = () => {
      const width = window.innerWidth;
      if (width < 640) {
        return {
          nodeRadius: 20,
          fontSize: 11,
          curveOffset: 15,
          glowRadius: 25,
        };
      } else if (width < 1024) {
        return {
          nodeRadius: 22,
          fontSize: 12,
          curveOffset: 25,
          glowRadius: 30,
        };
      }
      return {
        nodeRadius: 25,
        fontSize: 14,
        curveOffset: 30,
        glowRadius: 35,
      };
    };

    let employeePositions = getEmployeePositions();
    let nodePositions = getNodePositions();

    // Update positions on resize
    const handleResize = () => {
      employeePositions = getEmployeePositions();
      nodePositions = getNodePositions();
    };

    window.addEventListener("resize", handleResize);

    // Add a flag to track if first deposit has reached pool
    let hasFirstDeposit = false;

    // Animation variables
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      progress: number;
      opacity: number;
      type: "deposit" | "withdrawal" | "yield";
      color: string;
      pulse: number;
      targetEmployee?: number;
    }> = [];

    const createParticle = (type: "deposit" | "withdrawal" | "yield") => {
      if (type === "deposit") {
        // Single deposit from employer to pool - bigger size
        particles.push({
          x: canvas.width * 0.25,
          y: canvas.height * 0.5,
          size: Math.random() * 4 + 4,
          speed: Math.random() * 0.15 + 0.12,
          progress: 0,
          opacity: 1,
          type,
          color: colors.purple.main,
          pulse: Math.random() * Math.PI * 2,
        });
      } else if (type === "withdrawal") {
        // Random employee withdrawal - bigger size
        const randomEmployee = Math.floor(
          Math.random() * employeePositions.length
        );
        particles.push({
          x: canvas.width * 0.5,
          y: canvas.height * 0.5,
          size: Math.random() * 4 + 3,
          speed: Math.random() * 0.15 + 0.1,
          progress: 0,
          opacity: 1,
          type,
          color: colors.purple.main,
          pulse: Math.random() * Math.PI * 2,
          targetEmployee: randomEmployee,
        });
      } else {
        // Yield particle - kept small
        particles.push({
          x: canvas.width * 0.5,
          y: canvas.height * 0.5,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.15 + 0.08,
          progress: 0,
          opacity: 1,
          type,
          color: colors.purple.main,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    // Create particles at intervals
    setInterval(() => createParticle("deposit"), 2000);
    setInterval(() => createParticle("withdrawal"), 800);

    // Only start yield particles after first deposit
    const yieldInterval = setInterval(() => {
      if (hasFirstDeposit) {
        createParticle("yield");
      }
    }, 1800);

    // Helper function to calculate bezier curve point
    const getBezierPoint = (
      t: number,
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      curveOffset: number = 30
    ) => {
      const controlX = (startX + endX) / 2;
      const cp1x = controlX + curveOffset;
      const cp1y = startY;
      const cp2x = controlX - curveOffset;
      const cp2y = endY;

      const t1 = 1 - t;

      // Cubic Bezier curve formula
      const x =
        t1 * t1 * t1 * startX +
        3 * t1 * t1 * t * cp1x +
        3 * t1 * t * t * cp2x +
        t * t * t * endX;

      const y =
        t1 * t1 * t1 * startY +
        3 * t1 * t1 * t * cp1y +
        3 * t1 * t * t * cp2y +
        t * t * t * endY;

      return { x, y };
    };

    // Draw path function - updated colors
    const drawPath = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      curveOffset: number = 30
    ) => {
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, `${colors.purple.main}22`);
      gradient.addColorStop(0.5, `${colors.purple.main}33`);
      gradient.addColorStop(1, `${colors.purple.main}22`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.moveTo(startX, startY);

      // Draw bezier curve
      const controlX = (startX + endX) / 2;
      ctx.bezierCurveTo(
        controlX + curveOffset,
        startY,
        controlX - curveOffset,
        endY,
        endX,
        endY
      );
      ctx.stroke();
    };

    // Draw node function - updated styling
    const drawNode = (x: number, y: number, label: string) => {
      const { nodeRadius, fontSize, glowRadius } = getScaledSizes();

      // Outer glow
      const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      glowGradient.addColorStop(0, `${colors.gray.light}33`);
      glowGradient.addColorStop(1, "transparent");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(
        x - glowRadius,
        y - glowRadius,
        glowRadius * 2,
        glowRadius * 2
      );

      // Main circle
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, `${colors.gray.light}33`);

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.strokeStyle = colors.gray.main;
      ctx.lineWidth = 1.5;
      ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.strokeStyle = `${colors.gray.main}44`;
      ctx.lineWidth = 1;
      ctx.arc(x, y, nodeRadius * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      // Label
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 8;
      ctx.fillStyle = colors.gray.dark;
      ctx.font = `500 ${fontSize}px Inter`;
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + nodeRadius + fontSize + 5);
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use responsive positions
      const { employer: employerX, pool: poolX } = nodePositions;

      // Draw paths with adjusted curve offset based on screen size
      const curveOffset = window.innerWidth < 640 ? 20 : 30;

      employeePositions.forEach((pos) => {
        drawPath(
          canvas.width * poolX,
          canvas.height * 0.5,
          canvas.width * pos.x,
          canvas.height * pos.y,
          curveOffset
        );
      });

      // Draw employer to pool path
      drawPath(
        canvas.width * employerX,
        canvas.height * 0.5,
        canvas.width * poolX,
        canvas.height * 0.5,
        curveOffset
      );

      // Draw yield path
      drawPath(
        canvas.width * poolX,
        canvas.height * 0.5,
        canvas.width * employerX,
        canvas.height * 0.5,
        curveOffset
      );

      // Draw nodes with adjusted font size
      const fontSize = window.innerWidth < 640 ? 12 : 14;

      drawNode(
        canvas.width * employerX,
        canvas.height * 0.5,
        "Employer",
        fontSize
      );
      drawNode(
        canvas.width * poolX,
        canvas.height * 0.5,
        "Yield Pool",
        fontSize
      );
      employeePositions.forEach((pos, index) => {
        drawNode(
          canvas.width * pos.x,
          canvas.height * pos.y,
          `Employee ${index + 1}`,
          fontSize
        );
      });

      // Update and draw particles
      particles = particles.filter((particle) => particle.opacity > 0);

      particles.forEach((particle) => {
        particle.progress += particle.speed;
        particle.pulse += 0.1;

        if (particle.type === "deposit") {
          const t = particle.progress / 100;
          const point = getBezierPoint(
            t,
            canvas.width * employerX,
            canvas.height * 0.5,
            canvas.width * poolX,
            canvas.height * 0.5
          );
          particle.x = point.x;
          particle.y = point.y;

          // Check if deposit has reached the pool (around 90% of the way)
          if (!hasFirstDeposit && t > 0.9) {
            hasFirstDeposit = true;
          }
        } else if (particle.type === "withdrawal") {
          const targetPos = employeePositions[particle.targetEmployee || 0];
          const t = particle.progress / 100;
          const point = getBezierPoint(
            t,
            canvas.width * poolX,
            canvas.height * 0.5,
            canvas.width * targetPos.x,
            canvas.height * targetPos.y
          );
          particle.x = point.x;
          particle.y = point.y;
        } else {
          const t = particle.progress / 100;
          const point = getBezierPoint(
            t,
            canvas.width * poolX,
            canvas.height * 0.5,
            canvas.width * employerX,
            canvas.height * 0.5
          );
          particle.x = point.x;
          particle.y = point.y;
        }

        if (particle.progress > 80) {
          particle.opacity = 1 - (particle.progress - 80) / 20;
        }

        // Draw particles with glow effect
        ctx.beginPath();
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;

        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.2);
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("resize", handleResize);
      clearInterval(yieldInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
