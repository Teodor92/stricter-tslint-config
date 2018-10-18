const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('tslint-misc-rules')), './'),
    path.join(path.dirname(require.resolve('tslint-sonarts')), './lib/rules'),
  ],
  rules: {
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],
    'member-ordering': [
      true,
      {
        'order': [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ]
      }
    ],
    'no-any': false,
    'no-empty-interface': true,
    'no-import-side-effect': false,
    'no-inferrable-types': false,
    'no-internal-module': true,
    'no-magic-numbers': [
      true,
      -1,
      0,
      1,
      2
    ],
    'no-namespace': false,
    'no-non-null-assertion': false,
    'no-parameter-reassignment': true,
    'no-reference': true,
    'no-var-requires': true,
    'only-arrow-functions': true,
    'prefer-for-of': true,
    'promise-function-async': true,
    'typedef': [
      true,
      'call-signature',
      'parameter',
      'property-declaration',
      'variable-declaration',
      'member-variable-declaration',
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    'unified-signatures': true,
    'await-promise': true,
    'curly': true,
    'forin': true,
    'import-blacklist': false,
    'label-position': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': [
      false,
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace'
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': [
      true,
      'check-parameters'
    ],
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': false,
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-null-keyword': false,
    'no-object-literal-type-assertion': false,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unbound-method': false,
    'no-unnecessary-class': [
      true,
      'allow-constructor-only',
      'allow-static-only',
      'allow-empty-class'
    ],
    'no-unsafe-any': false,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-use-before-declare': false,
    'no-var-keyword': true,
    'prefer-object-spread': true,
    'radix': true,
    'restrict-plus-operands': false,
    'strict-type-predicates': false,
    'switch-default': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'use-default-type-parameter': true,
    'use-isnan': true,
    'cyclomatic-complexity': [
      true,
      10
    ],
    'eofline': true,
    'deprecation': true,
    'indent': [
      true,
      'spaces',
      4
    ],
    'max-classes-per-file': [
      true,
      1
    ],
    'max-file-line-count': [
      true,
      300
    ],
    'max-line-length': [
      true,
      140
    ],
    'no-default-export': true,
    'no-duplicate-imports': true,
    'no-mergeable-namespace': true,
    'no-require-imports': false,
    'object-literal-sort-keys': [
      false,
      'ignore-case',
      'match-declaration-order'
    ],
    'prefer-const': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'always',
        'singleline': 'never'
      }
    ],
    'align': [
      true,
      'parameters',
      'statements',
      'members',
      'elements'
    ],
    'array-type': [
      true,
      'array'
    ],
    'arrow-parens': true,
    'arrow-return-shorthand': true,
    'binary-expression-operand-order': true,
    'class-name': true,
    'comment-format': [
      true,
      'check-space'
    ],
    'encoding': true,
    'import-spacing': true,
    'interface-name': [
      true,
      'always-prefix'
    ],
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'match-default-export-name': true,
    'newline-before-return': false,
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': true,
    'no-consecutive-blank-lines': true,
    'no-irregular-whitespace': true,
    'no-parameter-properties': false,
    'no-redundant-jsdoc': true,
    'no-trailing-whitespace': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'number-literal-format': true,
    'object-literal-key-quotes': [
      true,
      'as-needed'
    ],
    'object-literal-shorthand': true,
    'one-line': [
      true,
      'check-open-brace',
      'check-whitespace',
      'check-catch',
      'check-finally',
      'check-else'
    ],
    'one-variable-per-declaration': true,
    'ordered-imports': true,
    'prefer-function-over-method': false,
    'prefer-method-signature': false,
    'prefer-switch': [
      true,
      {
        'min-cases': 3
      }
    ],
    'prefer-template': [
      true,
      'allow-single-concat'
    ],
    'quotemark': [
      true,
      'single'
    ],
    'return-undefined': true,
    'semicolon': [
      true,
      'always'
    ],
    'space-before-function-paren': false,
    'switch-final-break': true,
    'type-literal-delimiter': false,
    'variable-name': [
      true,
      'check-format',
      'ban-keywords'
    ],
    'whitespace': [
      true,
      'check-module',
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type',
      'check-preblock',
      'check-rest-spread',
      'check-typecast',
      'check-preblock',
      'check-type-operator'
    ],

    // tslint-eslint-rules rules
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
    'ter-padded-blocks': false,

    // tslint-microsoft-contrib rules
    'mocha-avoid-only': true,
    'no-banned-terms': true,
    'no-delete-expression': true,
    'no-string-based-set-immediate': true,
    'no-string-based-set-interval': true,
    'no-string-based-set-timeout': true,
    'no-typeof-undefined': true,
    'no-unnecessary-bind': true,
    'no-unnecessary-override': true,
    'no-useless-files': true,
    'promise-must-complete': true,

    // tslint-misc-rules rules
    'class-method-newlines': false, // Not working correctly with a lot if cases
    'prefer-or-operator-over-ternary': true,
    // tslint-sonarts rules
    'no-all-duplicated-branches': true,
    'no-case-with-or': true,
    'no-collection-size-mischeck': true,
    'no-element-overwrite': true,
    'no-empty-destructuring': true,
    'no-identical-conditions': true,
    'no-identical-expressions': true,
    'no-ignored-initial-value': true,
    'no-ignored-return': true,
    'no-in-misuse': true,
    'no-misleading-array-reverse': true,
    'no-misspelled-operator': true,
    'no-self-assignment': true,
    'no-unthrown-error': true,
    'no-use-of-empty-return-value': true,
    'no-useless-increment': true,
    'no-useless-intersection': true,
    'cognitive-complexity': true,
    'consecutive-overloads': true,
    'max-union-size': true,
    'mccabe-complexity': false, // Other rules mesure this
    'no-accessor-field-mismatch': true,
    'no-array-delete': true,
    'no-big-function': true,
    'no-collapsible-if': true,
    'no-commented-code': true,
    'no-dead-store': true,
    'no-duplicate-in-composite': true,
    'no-duplicate-string': true,
    'no-duplicated-branches': true,
    'no-empty-nested-blocks': true,
    'no-extra-semicolon': true,
    'no-gratuitous-expressions': true,
    'no-hardcoded-credentials': true,
    'no-identical-functions': true,
    'no-inconsistent-return': true,
    'no-invalid-await': true,
    'no-invariant-return': true,
    'no-inverted-boolean-check': true,
    'no-multiline-string-literals': true,
    'no-nested-incdec': true,
    'no-nested-template-literals': true,
    'no-redundant-boolean': true,
    'no-redundant-jump': true,
    'no-redundant-parentheses': true,
    'no-return-type-any': true,
    'no-same-line-conditional': true,
    'no-small-switch': true,
    'no-statements-same-line': true,
    'no-unconditional-jump': true,
    'no-undefined-argument': true,
    'no-unenclosed-multiline-block': true,
    'no-unused-array': true,
    'no-useless-cast': true,
    'no-variable-usage-before-declaration': true,
    'parameters-max-number': true,
    'prefer-default-last': true,
    'prefer-immediate-return': false, // Sometimes naming the return value can be more readable.
    'prefer-optional': true,
    'prefer-promise-shorthand': true,
    'use-primitive-type': true,
    'use-type-alias': true,
  }
}