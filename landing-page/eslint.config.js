// ESLint Flat Config for Next.js + TypeScript in the landing-page app
// Uses @eslint/js and typescript-eslint flat config helpers

// If you don't have these deps yet, install:
//   npm i -D eslint @eslint/js typescript-eslint eslint-plugin-react-refresh

const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactRefresh = require('eslint-plugin-react-refresh');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = tseslint.config(
    // Global ignores
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'dist/**',
            'build/**',
            '**/*.min.*',
        ],
    },

    // Base JS recommended rules
    js.configs.recommended,

    // TypeScript recommended rules (parser + rules)
    ...tseslint.configs.recommended,

    // Project-specific overrides
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
        },
        settings: {
            // For React-specific lint rules that detect version
            react: { version: 'detect' },
        },
        plugins: {
            'react-refresh': reactRefresh,
        },
        rules: {
            // Helpful during dev with React Fast Refresh
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            // General stylistic/quality preferences (tweak as desired)
            'no-unused-vars': 'off', // handled by TS rule below
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-undef': 'off', // TS handles this
        },
    },
);


