---
slug: /paid-features/webhooks
sidebar_position: 4
---

# Webhooks

You can subscribe to webhooks from your folders.
Webhooks allow you to receive information following an event occurring in your URLR account.

## Available events

| Name | Description |
|------|-------------|
| Link clicked | Event sent each time a link in the folder is clicked on |

## Format of a request

POST request to your URL set on URLR.

### Headers

| Header | Description | Example value |
|--------|-------------|---------------|
| date | Date sent | Sun, 15 Oct 2023 19:28:47 GMT |
| user-agent | User-Agent | URLR |
| x-signature | Signature to verify the webhook | fef82811b8c21eddf3202a50f069ada534bdb0263508b122d24a878d005dc26a |
| content-type | Body format | application/json |

### Body

```json
{
    "event": "link_clicked",
    "link": {
        "code": "yBPhx",
        "team": 5,
        "folder": 10
    },
    "country": 'null',
    "region": null,
    "city": null,
    "system": "GNU/Linux",
    "browser": "Firefox",
    "isBot": false,
    "referer": null,
    "timestamp": 1697398126
}
```

## Security

It is important to ensure that the webhooks you receive are sent by URLR.

To do this, you will use your **secret key** which you can find in the configuration of your webhooks and the value of the **x-signature** field in the headers.

The goal is to generate a keyed hash value from the body, using the HMAC method, and compare it with the signature received.

:::info

Encode the body in JSON and escape the slashes (/) to get a valid hmac.

:::

### PHP

```php
<?php

function verifySignature(string $body, string $secretKey): bool {
    $signature = $_SERVER['x-signature'];

    $computedSignature = hash_hmac('sha256', $body, $secretKey);

    return hash_equals($computedSignature, $signature);
}
```

### JavaScript (Node.js)

```js
const crypto = require('crypto');

function verifySignature(req, secretKey) {
    const signature = req.headers['x-signature'];

    const computedSignature = crypto.createHmac('sha256', secretKey)
        .update(JSON.stringify(req.body).replace(/\//g, '\\/'))
        .digest('hex');

    return computedSignature === signature;
}
```