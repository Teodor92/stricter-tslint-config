# Stricter tslint configuration

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