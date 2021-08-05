stencil-wizard
==============

A better stencil generator.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/stencil-wizard.svg)](https://npmjs.org/package/stencil-wizard)
[![Downloads/week](https://img.shields.io/npm/dw/stencil-wizard.svg)](https://npmjs.org/package/stencil-wizard)
[![License](https://img.shields.io/npm/l/stencil-wizard.svg)](https://github.com/ascpenteado/stencil-wizard/blob/master/package.json)

<!-- toc -->
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
* [`stw create [FILE]`](#stw-create-file)
* [`stw hello [FILE]`](#stw-hello-file)
* [`stw help [COMMAND]`](#stw-help-command)

## `stw create [FILE]`

describe the command here

```
USAGE
  $ stw create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/ascpenteado/stencil-wizard/blob/v0.0.0/src/commands/create.ts)_

## `stw hello [FILE]`

describe the command here

```
USAGE
  $ stw hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ stw hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ascpenteado/stencil-wizard/blob/v0.0.0/src/commands/hello.ts)_

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
