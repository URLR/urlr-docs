---
slug: /paid-features/file-import
sidebar_position: 3
---

# Importing links by file

In order to reduce mass links, we propose a system of import by file.

This functionality is accessible from a **previously created folder**.

## Prerequisites

This file must respect certain rules to work correctly:

- Use the CSV format
- Do not contain headers
- Contain one link per line
- 10 000 links maximum per file
- Use one of the supported delimiter characters

## Delimiter character

The columns in a CSV file are delimited by a delimiter character.
The most common delimiter is the comma. If your file uses another one, you have the option to specify it in the interface:

<img src="/img/docs/import/delimiter.png" width="500" />

## Import with advanced options

It is also possible to specify options to the links in this file as you could do on the interface (password, custom code, ...).

These options must be specified in the columns following the links and respect this order:

1. url
2. expiration date
3. password
4. custom code
5. label

## Sample file

Here is a CSV file that you can use as a basis for your CSV import:

[sample-import.csv](/csv/import/sample-import.csv)

If an import fails, you will find the details of the errors with the impacted line numbers.