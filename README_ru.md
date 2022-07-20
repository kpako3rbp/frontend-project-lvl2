# Gendiff 
[![Actions Status](https://github.com/kpako3rbp/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/kpako3rbp/frontend-project-lvl2/actions)
[![Setup and check](https://github.com/kpako3rbp/frontend-project-lvl2/actions/workflows/gendiff.yml/badge.svg)](https://github.com/kpako3rbp/frontend-project-lvl2/actions/workflows/gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/61b29d55ced45d64cd1a/maintainability)](https://codeclimate.com/github/kpako3rbp/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/61b29d55ced45d64cd1a/test_coverage)](https://codeclimate.com/github/kpako3rbp/frontend-project-lvl2/test_coverage)


Читайте на других языках: [English](./README.md) | Русский 

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json


## Установка

```sh
$ git clone git@github.com:kpako3rbp/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ nmp link
```

## Быстрый старт

### Вывод справки

Используйте флаг -h или --help для вызова справки

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
### Использование 
Используйте флаг -f или --format для выбора необходимого форматтера. По умолчанию используется "stylish". Далее укажите пути к сравниваемым файлам. Программа умеет работать как с относительными, так и абсолютными путями.

## Формат вывода 'stylish'

```sh
$ gendiff file1.json file2.json
$ gendiff file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz.svg)](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz) 

## Формат вывода 'plain'

```sh
$ gendiff -f plain file1.json file2.json
$ gendiff -f plain file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF.svg)](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF)

## Формат вывода 'json'

```sh
$ gendiff -f json file1.json file2.json
$ gendiff -f json file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN.svg)](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN)