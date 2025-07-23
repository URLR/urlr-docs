---
slug: /imports/links
---

# Import links by file

File-based link import allows you to create or update multiple short links in a single operation, making it easier to integrate or migrate your data.

## Prerequisites

This file must respect certain rules to work correctly:

- Be in CSV or JSON format
- Do not contain headers
- Contain one link per line
- 10 000 links maximum per file
- Use one of the supported delimiter characters (CSV)

:::info

The JSON format allows you to take full advantage of all available features for link creation or editing, whereas the CSV format is limited to more basic functionalities.

:::

:::info

All fields are optional except `url` field.
The IDs (UUIDs) can be found in the URLR interface, under each related entity (e.g. folders, tags, ...).

:::

## Import

Go to your [URLR](https://urlr.me/app/?r=import_links) interface in the **Import** section, then click on **Upload a file**.

### JSON

The JSON file must follow the same structure and use the same fields as [the API parameters](https://docs.urlr.me/api-reference/v1/#tag/Links/operation/createLink).

#### Supported Fields

All options supported by the API are also compatible with JSON import.

You can find a JSON sample file further down the page.

### CSV

#### Delimiter character

The columns in a CSV file are delimited by a delimiter character.
The most common delimiter is the comma. If your file uses another one, you have the option to specify it in the interface:

<img src="/img/docs/import/delimiter.png" width="500" />

| Field                     | Format                                       | Description                                  | Required (create / update) |
| ------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------- |
| link\_id                  | string (UUID)                                | Only used when updating an existing link     | ❌ / ✅                      |
| url                       | string                                       | URL to shorten                               | ✅ / ❌                      |
| code                      | string                                       | Custom code (slug) for the short link        | ❌ / ❌                      |
| domain                    | string (host)                         | Custom domain to use                         | ❌ / ❌                      |
| folder\_id                | string (UUID)                                | ID of the folder to store the link in        | ❌ / ❌                      |
| label                     | string                                       | Label to identify the link                   | ❌ / ❌                      |
| password                  | string                                       | Password required to access the link         | ❌ / ❌                      |
| tags                      | string (UUID)                                | List of tag IDs, comma-separated (maximum 3) | ❌ / ❌                      |
| expired\_url              | string (URL)                                 | Redirect URL after expiration                | ❌ / ❌                      |
| expired\_at               | ISO-8601 (e.g., `2027-12-31T23:59:59+00:00`) | Link expiration date                         | ❌ / ❌                      |
| delete\_after\_expiration | boolean (`true` or `false`)                  | Delete the link after it expires             | ❌ / ❌                      |
| delete\_at                | ISO-8601                                     | Scheduled deletion date                      | ❌ / ❌                      |

The CSV file **must contain a header line** listing the fields supported, in **any order**. Only fields present in the header will be processed.

You can find a CSV sample file further down the page.

### Sample files

Here are some examples of files you can use as a basis for your import:

- **CSV** : [sample.csv](/import/sample.csv)
- **JSON** : [sample.json](/import/sample.json)

If an import fails, you will find the details of the errors with the impacted line numbers.