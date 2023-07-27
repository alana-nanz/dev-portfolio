module.exports = {
  root: true,
  env: {
    node: true
  },
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'eslint:recommended',
		'plugin:vuejs-accessibility/recommended',
	],
  plugins: ['vuejs-accessibility'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    quotes: 0,
    // 'vuejs-accessibility/rule-name': 'error',
    indent: ['error', 'tab', {
      ignoreComments: true
		}],
		'import/extensions': ['error', 'always', {
			js: 'never',
		}],
		'no-multi-spaces': [2, {
			'exceptions': { 'ImportDeclaration': true },
		}],
		'import/prefer-default-export': 'off',
		'no-restricted-imports': ['off', { 'paths': ['src/stores', 'src/routes'] }],
    'max-len': ['error', 100, 1, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
      ObjectPattern: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
      ImportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
      ExportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true
      }
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never'
		}],
		'vue/order-in-components': ['error', {
			'order': [
				'el',
				'name',
				'key',
				'parent',
				'functional',
				['components', 'directives', 'filters'],
				'mixins',
				'layout',
				'middleware',
				'transition',
				'model',
				['props', 'propsData'],
				'emits',
				'setup',
				'data',
				'fetch',
				'head',
				'computed',
				'watch',
				'watchQuery',
				'LIFECYCLE_HOOKS',
				'methods',
				['template', 'render'],
				'renderError'
			]
		}]
  }
};
