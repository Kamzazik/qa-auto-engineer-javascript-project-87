## Вычислитель отличий

[![Actions Status](https://github.com/Kamzazik/qa-auto-engineer-javascript-project-87/workflows/hexlet-check/badge.svg)](https://github.com/Kamzazik/qa-auto-engineer-javascript-project-87/actions)
[![Coverage](https://img.shields.io/badge/coverage-82.82%25-brightgreen)](https://github.com/Kamzazik/qa-auto-engineer-javascript-project-87)(https://sonarcloud.io/dashboard?id=Kamzazik_qa-auto-engineer-javascript-project-87)

**Вычислитель отличий** — это утилита командной строки для сравнения двух конфигурационных файлов (JSON, YAML). Программа показывает различия между файлами в наглядном формате.

## Установка

```bash
npm install
```

## Использование

```bash
gendiff <filepath1> <filepath2>
```

## Опции

- `-f, --format <type>` — выбор формата вывода (stylish, plain, json)

## Примеры

Сравнение двух JSON файлов:

```bash
gendiff file1.json file2.json
```

Сравнение с выводом в формате plain:

```bash
gendiff --format plain file1.json file2.json
```

## Примеры работы

### Stylish формат (по умолчанию)
[![asciicast](https://asciinema.org/a/zRPo9iPRAdL9GOMB.svg)](https://asciinema.org/a/zRPo9iPRAdL9GOMB)

### Plain формат
[![asciicast](https://asciinema.org/a/mFIUZn5kSiStGqI7.svg)](https://asciinema.org/a/mFIUZn5kSiStGqI7)

### JSON формат
[![asciicast](https://asciinema.org/a/MsFQdrebhJcb6dgj.svg)](https://asciinema.org/a/MsFQdrebhJcb6dgj)