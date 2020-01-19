const tslintEslintRulesConfig = {
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': [
        true,
        'both'
    ],
    'no-invalid-regexp': true,
    'no-regex-spaces': true,
    'ter-no-sparse-arrays': [
        true
    ],
    'no-unexpected-multiline': true,
    'no-multi-spaces': [
        true
    ],
    'ter-no-proto': true,
    'ter-no-script-url': true,
    'ter-no-self-compare': true,
    'handle-callback-err': [
        true,
        '^.*(e|E)rr'
    ],
    'array-bracket-spacing': [
        true,
        'never'
    ],
    'block-spacing': [
        true,
        'always'
    ],
    'brace-style': [
        true,
        '1tbs',
        {
            'allowSingleLine': true
        }
    ],
    'ter-computed-property-spacing': [
        true,
        'never'
    ],
    'ter-func-call-spacing': [
        true,
        'never'
    ],
    'ter-no-mixed-spaces-and-tabs': {
        'type': 'spaces'
    },
    'object-curly-spacing': [
        true,
        'always'
    ],
    'space-in-parens': [
        true,
        'never'
    ],
    'ter-no-tabs': true,
    'ter-arrow-body-style': [
        true,
        'as-needed'
    ],
    'ter-arrow-spacing': [
        true
    ],
    'ter-prefer-arrow-callback': [
        true
    ],
    'ter-padded-blocks': false, // an interesting rule, but don't see any value in it.
};

module.exports = {
    tslintEslintRulesConfig,
};

