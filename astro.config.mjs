import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://ege-okyay.github.io",
  base: "/",
  integrations: [
    solidJs(),
    UnoCSS({ injectReset: true }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
});
