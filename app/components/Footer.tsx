import { SVGProps } from "react";

interface SocialIcon {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

interface FooterProps {
  social: SocialIcon[];
}

export default function Footer({ social }: FooterProps) {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="border-t border-zinc-800 py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center gap-x-6 md:order-2">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-orange-600 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
          &copy; 2024 Kairo Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
