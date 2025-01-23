import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

interface SpinnerProps {
  inline?: boolean;
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  inline = false,
  size = 35,
  color = "#000000",
}) => {
  if (inline) {
    return <ScaleLoader color={color} height={size} />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
      <ScaleLoader color={color} height={size} />
    </div>
  );
};

export default Spinner;
