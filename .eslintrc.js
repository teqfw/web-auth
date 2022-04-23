module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended'
    ],
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
        'babelOptions': {
            'plugins': [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-private-methods'
            ],
        },
    },
    'plugins': [
        '@babel'
    ],
    'rules': {
        'camelcase': [
            'warn',
            {'properties': 'never', ignoreDestructuring: true, allow: ['^TeqFw_Web_Auth_']}
        ],
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
