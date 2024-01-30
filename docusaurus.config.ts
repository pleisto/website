import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import blogPlugin from "./plugins/blog-plugin";


const config: Config = {
  title: "Pleisto",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://pleisto.com",
  baseUrl: "/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pleisto", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      // "ja", 
      //"zh-Hans"
    ],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      blogPlugin,
      {
        showReadingTime: false,
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "",
      hideOnScroll: true,
      logo: {
        alt: "Pleisto",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/#about-us",
          label: "About Us",
          position: "left",
          activeBasePath: "/#about-us",
        },
        {
          to: "/#ai-solutions",
          label: "Products & Services",
          position: "left",
          activeBasePath: "/#ai-solutions",
        },
        // {
        //   to: "/blog",
        //   label: "Blogs",
        //   position: "left",
        //   activeBaseRegex: "/blog/*",
        // },
        {
          to: "/#core-members",
          label: "Core Members",
          position: "left",
          activeBasePath: "/#core-members",
        },
        {
          to: "/#partners",
          label: "Partner",
          position: "left",
          activeBasePath: "/#partners",
        },
        {
          to: "/#contact-us",
          label: "Contact us",
          position: "left",
          activeBasePath: "/#contact-us",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
