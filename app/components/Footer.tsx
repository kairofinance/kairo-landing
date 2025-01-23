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
    <footer className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-50 via-white to-transparent" />
      </div>

      <div className="mx-auto max-w-[1000px] px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-12">
          <div className="flex justify-center space-x-6 md:order-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Kairo Labs. All rights reserved.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <nav className="flex justify-center space-x-6 md:justify-end">
            <a
              href="mailto:contact@kairo.finance"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
