import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: ["warn", "always"],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".json"]
        },
        alias: {
          map: [
            ["~", "./"],
            ["@", "./src"]
          ],
          extensions: [".js", ".jsx", ".json"]
        }
      }
    },
  }
];