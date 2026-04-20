## Вычислитель отличий

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Kamzazik_qa-auto-engineer-javascript-project-87&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Kamzazik_qa-auto-engineer-javascript-project-87)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Kamzazik_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Kamzazik_qa-auto-engineer-javascript-project-87)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Kamzazik_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Kamzazik_qa-auto-engineer-javascript-project-87)

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
[![asciicast](https://asciinema.org/a/3Bmp2SBMYryO6UDG.svg)](https://asciinema.org/a/3Bmp2SBMYryO6UDG)

### Plain формат
[![asciicast](https://asciinema.org/a/KhXaOSSHMyu3D1gA.svg)](https://asciinema.org/a/KhXaOSSHMyu3D1gA)

### JSON формат
[![asciicast](https://asciinema.org/a/Ve62OSmdjUTMmcUS.svg)](https://asciinema.org/a/Ve62OSmdjUTMmcUS)