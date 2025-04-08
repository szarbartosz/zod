import Logo from "@/public/logo/logo.png";
// import LogoWhite from "@/public/logo/logo-white.png";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
export const logo = (
  <div className="mb-2">
    <Image alt="Zod logo" src={Logo} sizes="100px" className="hidden dark:block w-8 md:w-8" aria-label="Zod logo" />
    <Image alt="Zod logo" src={Logo} sizes="100px" className="block dark:hidden w-8 md:w-8" aria-label="Zod logo" />
  </div>
);

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <>{logo}</>,
  },
  // links: [
  //   {
  //     text: 'Documentation',
  //     url: '/docs',
  //     active: 'nested-url',
  //   },
  // ],
};
