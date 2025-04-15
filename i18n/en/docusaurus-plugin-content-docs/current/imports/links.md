---
slug: /imports/links
---

# Import links by file

Link import by file (in CSV format) lets you add several short links in a single operation, facilitating data integration or migration.

## Prerequisites

This file must respect certain rules to work correctly:

- Use the CSV format
- Do not contain headers
- Contain one link per line
- 10 000 links maximum per file
- Use one of the supported delimiter characters

## Import

Go to your [URLR](https://urlr.me/app/?r=import_links) interface in the **Import** section, then click on **Upload a file**.

## Delimiter character

The columns in a CSV file are delimited by a delimiter character.
The most common delimiter is the comma. If your file uses another one, you have the option to specify it in the interface:

<img src="/img/docs/import/delimiter.png" width="500" />

## Import with advanced options

It is also possible to specify options to the links in this file as you could do on the interface (password, custom code, ...).

These options must be specified in the columns following the links and respect this order:

| Champ | Colonne | Format |
|---|---|---|
| url | 1 | string |
| expiration date | 2 | ISO-8601 |
| password | 3 | string |
| custom code | 4 | string |
| label | 5 | string |
| tags | 6 | comma-separated list of up to 3 tag IDs |

## Sample file

Here is a CSV file that you can use as a basis for your CSV import:

[sample-import.csv](/csv/import/sample-import.csv)

If an import fails, you will find the details of the errors with the impacted line numbers.