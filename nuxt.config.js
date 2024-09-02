// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";

export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },
   components: [
      // импорт компонентов, основываясь только на их имени, а не на пути (pathPrefix: false)
      {
         path: "~/components",
         pathPrefix: true,
      },
      // Импорт компонентов из других директорий, помимо components
      { path: "~/sections", pathPrefix: true },
   ],
   vite: {
      server: {
         port: 3000,
         strictPort: true,
         hmr: {
            port: 3000,
         },
      },
      css: {
         postcss: {
            plugins: [
               postCssSortMediaQueries({ sort: "desktop-first" }),
               autoprefixer({
                  overrideBrowserslist: ["last 3 versions", "ie >= 10"],
               }),
            ],
         },
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@use "sass:math"; @use "~/assets/scss/mixins.scss" as *; @import "~/assets/scss/variables.scss";',
            },
         },
      },
   },
});
