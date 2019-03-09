# Stricter TSLint Configuration

[![Build Status](https://travis-ci.org/strictr/tslint-config.svg?branch=master)](https://travis-ci.org/strictr/tslint-config)

[![npm version](https://badge.fury.io/js/%40strictr%2Ftslint-config.svg)](https://badge.fury.io/js/%40strictr%2Ftslint-config)

This package contains a strict tslint configuration combining multiple rule packages to enforce a common code style.

## Installation

In order to use this package, you can install it as a development dependency:

```bash
npm i @strictr/tslint-config -D
```

## Integration

To integrate the package, reference it in your `tslint.json` file:

```json
{
    "extends": "@strictr/tslint-config",
    "rules": {
    }
}
```
