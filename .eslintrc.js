module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'plugin:import/recommended',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'react/jsx-uses-react': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'react/jsx-props-no-spreading': ['off'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-non-null-assertion': ['off'],
   },
}
