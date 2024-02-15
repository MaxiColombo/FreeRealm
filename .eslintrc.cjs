module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    // Configuración para mostrar todos los tipos de errores
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    /* 'no-unused-vars': 'error', */ // Muestra un error cuando se encuentran variables no utilizadas
    'no-undef': 'error', // Muestra un error cuando se utilizan variables no definidas
    'no-extra-semi': 'error', // Muestra un error cuando hay puntos y comas extras
    'no-unreachable': 'error', // Muestra un error cuando hay código inalcanzable después de una declaración return, throw, continue o break
    'no-empty': 'error', // Muestra un error cuando hay bloques de código vacíos
    'no-multiple-empty-lines': 'error', // Muestra un error cuando hay múltiples líneas en blanco
    'no-trailing-spaces': 'error', // Muestra un error cuando hay espacios en blanco al final de una línea
    'comma-dangle': ['error', 'always-multiline'], // Muestra un error cuando falta una coma en la lista de propiedades de un objeto si la coma no está presente en la última línea
    /* 'quotes': ['error', 'single'],  */// Muestra un error cuando se usan comillas dobles en lugar de comillas simples
    "indent": ["error", 2]
   /*  'indent': ['error', 2]  */// Muestra un error cuando la sangría no es de 2 espacios
  }
};