# stencil-wizard

A better stencil generator.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/stencil-wizard.svg)](https://npmjs.org/package/stencil-wizard)
[![Downloads/week](https://img.shields.io/npm/dw/stencil-wizard.svg)](https://npmjs.org/package/stencil-wizard)
[![License](https://img.shields.io/npm/l/stencil-wizard.svg)](https://github.com/ascpenteado/stencil-wizard/blob/master/package.json)

<!-- toc -->
* [stencil-wizard](#stencil-wizard)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g stencil-wizard
$ stw COMMAND
running command...
$ stw (-v|--version|version)
stencil-wizard/0.0.0 linux-x64 node-v14.17.0
$ stw --help [COMMAND]
USAGE
  $ stw COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`stw create COMPONENT FOLDER`](#stw-create-component-folder)
* [`stw help [COMMAND]`](#stw-help-command)

## `stw create COMPONENT FOLDER`

This command creates component files inside yout src/components folder.

```
USAGE
  $ stw create COMPONENT FOLDER

ARGUMENTS
  COMPONENT  name your component and do not forget the unique prefix.
  FOLDER     folder where you wish your component to be created.

OPTIONS
  -h, --help                  show CLI help
  -s, --styles=scss|css|sass  (required) [default: scss] style language
  --storybook                 includes a storybook template file. Default is true.
```

_See code: [src/commands/create.ts](https://github.com/ascpenteado/stencil-wizard/blob/v0.0.0/src/commands/create.ts)_

## `stw help [COMMAND]`

display help for stw

```
USAGE
  $ stw help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->

- [`create`](#stw-create-file)

## `stw create [COMPONENT] [FOLDER]`

describe the command here

```
USAGE
  $ stw create [COMPONENT] [FOLDER]

OPTIONS
  -s, --styles     style technology that will be used
  --storybook      includes a storybook template file. Default is true.
  -h, --help       show CLI help
```

_See code: [src/commands/create.ts](https://github.com/ascpenteado/stencil-wizard/blob/v0.0.0/src/commands/create.ts)_
