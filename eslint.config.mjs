import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add rules
  {
    rules: {
      // Disable unused vars errors
      "@typescript-eslint/no-unused-vars": "off",

      // Turn off React hook exhaustive deps warning (optional)
      "react-hooks/exhaustive-deps": "off",

      // Disable Next.js <img> warning (optional)
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
