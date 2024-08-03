const cjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");

module.exports = {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.mjs",
      format: "esm",
    },
  ],
  plugins: [
    cjs(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
