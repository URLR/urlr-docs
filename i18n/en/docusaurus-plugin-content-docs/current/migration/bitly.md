---
slug: /migration/bitly
---

# Migration from Bitly

This guide explains how to migrate your reduced links from **Bitly** to **URLR** and manage existing statistics in just a few simple steps. Follow the instructions below to complete the migration.

## Prerequisites

Before you begin, please make sure you have the following :

- A Bitly account with access to the links you wish to migrate (Growth package or higher required).
- A URLR account (Pro package or higher required).

:::warning

You can only import links using [your own domain name](https://support.bitly.com/hc/en-us/articles/230558107-What-is-a-custom-domain) from Bitly.

:::

## Links

### Export your links from Bitly

To export your links from Bitly, follow these steps :

#### 1. Log in to your Bitly account

Go to [bitly.com](https://bitly.com) and log in to your account.

#### 2. Export

To export your links, we'll need a CSV file. To download it, you have two choices :

- [Export all your links](#export-all-your-links)
- [Export a link group](#export-a-group-of-links)

##### Export all your links

You can export all your links:

- Click on **Links** in the left-hand sidebar
- Click on **Export**
- Enter your email address
- Go to your mailbox and open the e-mail sent by Bitly
- The file will then be downloaded automatically

For more information, please visit the [bitly.com documentation](https://support.bitly.com/hc/en-us/articles/230631767-How-do-I-export-link-data-for-a-select-group-of-links).

##### Export a group of links

You can also select a group of links for export:

- Click on **Links** in the left-hand sidebar
- Select your links
- Click on **Export**
- The download will start automatically

For more information, please visit the [bitly.com documentation](https://support.bitly.com/hc/en-us/articles/230631767-How-do-I-export-link-data-for-a-select-group-of-links).

##### CSV file

Next, you should have the CSV file. Three columns are important in this file:

- Link
- Custom Link
- Destination URL

These three columns will be used for the URLR import file.

### Import your links into URLR

Now that you've got your CSV file, you'll need to format and import it. You'll find help in the [documentation](/en/docs/imports/links.md).

### Statistics

#### Export

It is not possible to import your statistics into URLR. However, we advise you to **export your statistics and save them in case you need them**.