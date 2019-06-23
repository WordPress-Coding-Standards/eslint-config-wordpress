# eslint-config-wordpress

[WordPress JavaScript Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/) shareable config for ESLint.

## Deprecated

This package has been deprecated, please use [@wordpress/eslint-plugin](https://www.npmjs.com/package/@wordpress/eslint-plugin) or [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts)

## Requirements

### npm

If you do not have npm installed on your computer, [follow the instructions here](https://www.npmjs.com/get-npm).

Next you will need to have npm set up for your JavaScript project. If you do not see a `package.json` file in your project's directory, run `npm init` within that directory and follow the prompts to create one. You do not need to answer all the questions if you do not plan to be publishing your project to npm, so accepting the defaults is usually fine. You can also edit the configuration later by editing your `package.json` file.

### eslint

After that you will need to have eslint installed for your project. If it is not installed already, run the following command:

```console
$ npm install --save-dev eslint
```

## Installation

If the requirements are satisfied, you can install this plugin as follows:

```console
$ npm install --save-dev eslint-config-wordpress
```

## Configuration

To use this plugin, you must have an eslint configuration file for your project. [There are several different formats for this config file](https://eslint.org/docs/user-guide/configuring#configuration-file-formats). In your config file you will need to find or create a section called "extends" and add "wordpress" to that section.

For example, if you are using the JSON file `.eslintrc.json`, it should look something like this:

```json
{
  "extends": "wordpress"
}
```

There may be other sections in your config file as well. [Read more about configuring eslint here](https://eslint.org/docs/user-guide/configuring).

## [License](LICENSE)
