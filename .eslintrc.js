module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@scandipwa/scandipwa-guidelines"
    ],
    "rules": {
        // Force @namespace comments in the code
        "@scandipwa/scandipwa-guidelines/use-namespace": "error",
        // Use "__construct" instead of "constructor"
        "@scandipwa/scandipwa-guidelines/use-magic-construct": "error",
        "@scandipwa/scandipwa-guidelines/derived-class-names": "error"
    }
};
