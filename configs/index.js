const { tslintRulesConfig } = require('./tslint');
const { tslintEslintRulesConfig } = require('./tslint-eslint-rules');
const { tslintMicrosoftContribRulesConfig } = require('./tslint-microsoft-contrib');
const { tslintMiscRulesConfig } = require('./tslint-misc-rules');
const { tslintSonarRulesConfig } = require('./tslint-sonarts');

module.exports = {
    tslintRulesConfig,
    tslintEslintRulesConfig,
    tslintMicrosoftContribRulesConfig,
    tslintMiscRulesConfig,
    tslintSonarRulesConfig,
};
