import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked, // Updated to recommendedTypeChecked
      ...tseslint.configs.stylisticTypeChecked, // Optionally added stylisticTypeChecked
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "18.3" }, // Set the React version
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react, // Add the react plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      semi: ["error", "always"], // Enforce semicolons
      ...react.configs.recommended.rules, // Enable recommended React rules
      ...react.configs["jsx-runtime"].rules, // Enable JSX runtime rules
    },
  }
);
