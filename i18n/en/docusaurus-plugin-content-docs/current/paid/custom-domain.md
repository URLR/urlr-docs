---
slug: /paid-features/custom-domain
sidebar_position: 2
---

# Setting up a custom domain

Using a custom domain to shorten your links improves your brand image by sharing links that are easily identifiable by your users.

## Prerequisites

- Be able to obtain a dedicated domain or sub-domain
- Have created a team within your URLR account

:::warning

The custom domain you choose must be specifically reserved for the use of URLR. The most practical approach is to select a sub-domain of your existing website. Don't hesitate to share this documentation with the person who can take these steps if you are not the person in charge.

:::

## Some examples of good subdomains

- **l.**
- **go.**
- **r.**

Throughout this guide, we will assume that our website is **mon-domaine.fr**.

In order to shorten our links with a custom domain without any additional purchase, we are going to configure the sub-domain **l.mon-domaine.fr**.

:::info

We choose the letter **l** as the sub-domain in this example as a shortcut for the word **links**.

:::

## Adding the domain to URLR    

Let's start by adding it to your team. Go to the **Custom domains** section of your team, click on **Add a domain** and finally fill in your domain.

<img src="/img/docs/custom-domain/custom-domain-en.png" width="500" />

## DNS modification

For your domain to be linked to URLR, you need to create a CNAME entry in its DNS zone.

Here is the corresponding entry: 

```
l.mon-domaine.fr. CNAME urlr.me.
```

Please note the dot after the domain name.

:::info

The propagation process following the modification of your DNS can take up to 24 hours.
The success of this operation will be indicated in your dashboard when the CNAME step changes from **red** to **green**.

:::

You can find out how to carry out this operation with some domain providers below.

### OVH

Go to the **DNS zone** section of your domain and click on the **Add an entry** button.

If you're not setting up a subdomain, simply leave the first field blank.

<img src="/img/docs/custom-domain/dns-cname-ovh.png" width="500" />

### Alternative method

If you can't add a CNAME entry on your domain, then you can add these type A entries instead:

- 46.252.181.103
- 46.252.181.104
- 91.208.207.214
- 91.208.207.215
- 91.208.207.216
- 91.208.207.217
- 91.208.207.218
- 185.42.117.108
- 185.42.117.109

## Activation

As soon as DNS propagation has been completed, you will be able to use your own custom domain. We still advise you to wait until the SSL certificate generation step to benefit from HTTPS.

:::info

You may temporarily see a warning from your browser when visiting your shortened links when the certificate has not yet been generated.

:::

<img src="/img/docs/custom-domain/custom-domain-validation-en.png" width="500" />

## Assigning the domain to a folder

To be able to shorten links using your domain, you need to assign it to one (or more) folders. Go to the folder of your choice, click on **Custom domain** and choose your previously configured domain.

<img src="/img/docs/custom-domain/custom-domain-folder-en.png" width="500" />

## Using the domain to shorten a link

Now that everything is in place, all you need to do is **select the folder** associated with your domain when you want to shorten a link from the homepage.

<img src="/img/docs/custom-domain/custom-domain-shortening-en.png" width="1000" />

Shorten your link... and here's the result!

<img src="/img/docs/custom-domain/custom-domain-shorten-en.png" width="500" />
