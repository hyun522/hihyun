import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';
// import eslintConfigPrettier from 'eslint-config-prettier';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // eslintConfigPrettier,
  prettierConfig,

  {
    extends: {
      prettier: prettierConfig,
    },
    // plugins: {
    //   prettier: prettierPlugin,
    // },
    rules: {
      'prettier/prettier': 'warn', // 또는 'error'
    },
  },
]);

export default eslintConfig;

// import { defineConfig } from 'eslint/config';
// import { FlatCompat } from '@eslint/eslintrc';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// import prettierPlugin from 'eslint-plugin-prettier';
// import eslintConfigPrettier from 'eslint-config-prettier';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({ baseDirectory: __dirname });

// export default defineConfig([
//   // ✅ Next.js 권장 규칙을 Flat Config로 “변환”해서 사용
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),

//   // ✅ Prettier를 ESLint 룰로 감시(선택)
//   {
//     plugins: {
//       prettier: prettierPlugin,
//     },
//     rules: {
//       'prettier/prettier': 'warn', // 'error'도 가능
//     },
//   },

//   // ✅ ESLint와 Prettier 충돌 룰 OFF (Flat Config에선 “배열 끝쪽”에 두는 게 핵심) :contentReference[oaicite:3]{index=3}
//   eslintConfigPrettier,

//   // ✅ ignore (globalIgnores 안 써도 됨)
//   {
//     ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
//   },
// ]);
