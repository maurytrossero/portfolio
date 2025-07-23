import vue from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.vue'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        extraFileExtensions: ['.vue'],        // ← aquí
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      vue,
      '@typescript-eslint': tsPlugin,
    },

    rules: {
      // combina reglas recomendadas
      ...tsPlugin.configs.recommended.rules,
      ...vue.configs.base.rules,
      ...vue.configs['vue3-essential'].rules,

      // tus overrides si quieres
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
];
