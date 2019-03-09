# Stricter TSLint Configuration

[![Build Status](https://travis-ci.org/strictr/tslint-config.svg?branch=master)](https://travis-ci.org/strictr/tslint-config)

[![npm version](https://badge.fury.io/js/%40strictr%2Ftslint-config.svg)](https://badge.fury.io/js/%40strictr%2Ftslint-config)

This package contains a strict tslint configuration combining multiple rule packages to enforce a common code style.

## How to use

In order to integrate this package, you can install it as a development dependency:

```bash
npm i stricter-tslint-config -D
```

And then reference it in your `tslint.json` file:

```json
{
    "extends": "stricter-tslint-config",
    "rules": {
    }
}
```
