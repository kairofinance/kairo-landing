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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
      </div>

      <div className="mx-auto max-w-[1300px] px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-12">
          <div className="flex justify-center space-x-6 md:order-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/40 hover:text-white transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-5 text-white/40 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Kairo Labs. All rights reserved.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <nav className="flex justify-center space-x-6 md:justify-end">
            <a
              href="/privacy"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:support@kairo.finance"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
