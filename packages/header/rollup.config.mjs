import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";

export default {
  input: "./lib/Header.jsx", // Adjust the entry point as needed
  output: [
    {
      file: "dist/index..js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
    }),
    terser(),
    css(),
  ],
};
