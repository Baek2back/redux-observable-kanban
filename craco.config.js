const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions) => {
        return {
          ...sassLoaderOptions,
          additionalData: `
            @use "sass:color";
            @use "sass:list";
            @use "sass:map";
            @use "sass:math";
            @use "sass:meta";
            @use "sass:selector";
            @use "sass:string";
            @use "@/scss/_colors" as colors;
          `,
        };
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
