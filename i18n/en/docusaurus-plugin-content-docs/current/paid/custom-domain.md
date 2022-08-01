---
slug: /paid-features/custom-domain
sidebar_position: 2
---

# Configure a custom domain

Using a custom domain for your reduced links allows you to improve your brand image by sharing links that are easily identifiable by your target.

## Prerequisites

- Have a domain (a subdomain also works)
- Have created a team in your URLR dashboard
- Have created a folder in the space dedicated to the links of your URLR team

#### Important

The chosen domain must be reserved for the use of URLR. This is why it may be useful to create a sub-domain.

## Adding the domain to URLR

For the purpose of this guide, we will want to configure the domain **r.votre-domaine.fr**.

Let's start by adding it to your team space. Go to the **Custom domains** section of your team, click on **Add domain** and finally fill in your domain.

<img src="/img/docs/custom-domain/custom-domain.png" width="500" />

## Changing DNS

In order for your domain to be linked to URLR, it is necessary to create a CNAME entry in its DNS zone.

Here is the corresponding entry: `r.votre-domaine.fr. CNAME urlr.me.` Please note the dot after the domain name.

To add this entry, you can use the examples below depending on your domain provider.

#### Note

Changing the zone may take up to 48 hours to be deployed.
The success of this operation will be signified in your dashboard when the CNAME step changes from **red** to **green**.

<img src="/img/docs/custom-domain/custom-domain-validation.png" width="500" />

### OVH

Go to the **DNS Zone** section of your domain and click the **Add entry** button.
If you don't want to use an additional subdomain, just leave the "subdomain" field blank.

<img src="/img/docs/custom-domain/dns-cname-ovh.png" width="500" />

## Activating by our team

The domain can only be used when the second step **Activation**, which is a validation on our side (URLR), also changes from **red** to **green**.

This activation is usually done within 1 hour and at most within 12 hours.

<img src="/img/docs/custom-domain/custom-domain-validation2.png" width="500" />

#### Note

We take care of generating an SSL certificate for your domain. It is therefore possible that you may temporarily see a warning from your browser when it has not yet been generated. Don't panic, just wait a few minutes.

## Assigning the domain to a folder

Finally, in order to be able to reduce links using your domain, it is necessary to assign it to one (or more) folders. Go to the folder of your choice, click on **Custom domain** and choose your previously configured domain.

<img src="/img/docs/custom-domain/custom-domain-folder.png" width="500" />

## Using to collapse a link

Now that everything is in place, all you have to do is to **select the folder** associated with your domain when you want to collapse a link.

<img src="/img/docs/custom-domain/custom-domain-shortening.png" width="500" />

And here is the result!

<img src="/img/docs/custom-domain/custom-domain-shorten.png" width="500" />