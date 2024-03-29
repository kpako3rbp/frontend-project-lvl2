# Gendiff 
[![Actions Status](https://github.com/kpako3rbp/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/kpako3rbp/frontend-project-lvl2/actions)
[![Setup and check](https://github.com/kpako3rbp/frontend-project-lvl2/actions/workflows/gendiff.yml/badge.svg)](https://github.com/kpako3rbp/frontend-project-lvl2/actions/workflows/gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/61b29d55ced45d64cd1a/maintainability)](https://codeclimate.com/github/kpako3rbp/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/61b29d55ced45d64cd1a/test_coverage)](https://codeclimate.com/github/kpako3rbp/frontend-project-lvl2/test_coverage)


Read this in other languages: English | [Русский](./README_ru.md)

Gendiff is a program that determines the difference between two data structures.

Utility features:

- Support for different input formats: yaml, json
- Report generation in the form of plain text, stylish and json


## Installation

```sh
$ git clone git@github.com:kpako3rbp/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ nmp link
```

## Quick Start

### Help
Use -h or --help flag for help

```sh
$ gendiff --help
```
```sh
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

### Usage
Use -f or --format flag to select the required formatter. "Stylish" set as default formatter. Next, specify the paths to the compared files. The program can work with relative and absolute paths.

## Output format 'stylish'

```sh
$ gendiff file1.json file2.json
$ gendiff file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz.svg)](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz) 

## Output format 'plain'

```sh
$ gendiff -f plain file1.json file2.json
$ gendiff -f plain file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF.svg)](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF)

## Output format 'json'

```sh
$ gendiff -f json file1.json file2.json
$ gendiff -f json file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN.svg)](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN)