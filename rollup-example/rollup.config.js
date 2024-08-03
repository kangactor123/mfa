const cjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");

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
    terser(),
  ],
};
