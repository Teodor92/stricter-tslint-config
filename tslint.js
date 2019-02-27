const path = require('path');
const {
    tslintRulesConfig,
    tslintEslintRulesConfig,
    tslintMicrosoftContribRulesConfig,
    tslintMiscRulesConfig,
    tslintSonarRulesConfig
} = require('./configs');

module.exports = {
    rulesDirectory: [
        path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
        path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
        path.join(path.dirname(require.resolve('tslint-misc-rules')), './'),
        path.join(path.dirname(require.resolve('tslint-sonarts')), './lib/rules'),
    ],
    rules: {
        ...tslintRulesConfig,
        ...tslintEslintRulesConfig,
        ...tslintMicrosoftContribRulesConfig,
        ...tslintMiscRulesConfig,
        ...tslintSonarRulesConfig
    }
}