import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import filesPath from "./rollup.config.js";

export default {
  input: filesPath.input(`resources/js/ui.common.js`),
  output: {
    dir: `${filesPath.output(`js`)}`,
    format: "iife",
    name: "UI",
  },
  plugins: [
    commonjs(),
    copy({
      targets: [
        {
          src: [
            `${filesPath.input(`resources/js/lib/jquery`)}`,
            `${filesPath.input(`resources/js/lib/jquery-ui`)}`,
            `${filesPath.input(`resources/js/lib/ui.plugin.js`)}`,
          ],
          dest: `${filesPath.output(`js`) + "/lib"}`,
        },
        {
          src: `${filesPath.input(`resources/js/ui.publish.js`)}`,
          dest: `${filesPath.output(`js`)}`,
        },
      ],
    }),
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              browsers: "> 0.5%, ie 11",
            },
            useBuiltIns: "usage",
            corejs: {
              version: 3,
              proposals: false,
            },
          },
        ],
      ],
    }),

    scss({
      fileName: "ui.common.css",
      output: filesPath.input(`resources/scss/ui.common.css`),
    }),
  ],
};
