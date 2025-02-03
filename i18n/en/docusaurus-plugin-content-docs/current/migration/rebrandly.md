---
slug: /migration/rebrandly
---

# Migration from Rebrandly

This guide explains how to migrate your shorts links from **Rebrandly** to **URLR** and manage existing statistics in just a few simple steps. Follow the instructions below to complete the migration.

## Prerequisites

Before you begin, please make sure you have the following:

- A Rebrandly account with API access
- A URLR account (**Pro** package or higher required)

:::warning

You can only import Bitly links that use a [custom domain name](https://support.rebrandly.com/hc/en-us/articles/224917167-What-is-a-Custom-Branded-Domain-Name) from Rebrandly.

:::

## Links

### Export your links from Rebrandly

Rebrandly does not allow you to export short links from its interface. However, you can export them via their API. To do this, you need to follow [their documentation](https://developers.rebrandly.com/recipes/export-links-to-csv).

The information to be extracted with the Rebrandly API is as follows:

- Destination URL (destination)
- Domain (domain)
- Short code (slashtag)

These three pieces of information will be used to build the import file for URLR.

### Importing your links into URLR

Now that you've got your CSV file, you'll need to format and import it. Help is available in the [documentation](imports/links.md).

## Statistics

### Export your statistics from Rebrandly

It is not possible to import your statistics into URLR, but we recommend that you **export your statistics** and **save them in case you need them**.