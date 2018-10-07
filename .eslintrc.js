module.exports = {
    extends: 'piecioshka',

    env: {
        browser: true,
        node: true,
    },

    parserOptions: {
        // Support syntax ES2018
        ecmaVersion: 2018,

        "ecmaFeatures": {
            "jsx": true
        },
        // Support syntax ES2015 Import/Export
        sourceType: "module"
    },

    "plugins": [
        "react"
    ],

    "rules": {
        "no-unused-vars": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "off",
        "sort-imports": "off",
        "semi": 'off',
        "no-console": 'off',
        "func-style": 'off'
    }

}