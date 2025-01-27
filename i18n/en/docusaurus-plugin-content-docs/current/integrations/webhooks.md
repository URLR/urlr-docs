---
slug: integrations/webhooks
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
        "id": "9759d03f-eaec-4ca4-a5a2-105ced01fbd8",
        "code": "yBPhx",
        "team": 5,
        "team_id": "2c196f79-0db8-421a-9230-623c8956bdbf",
        "folder": 10,
        "folder_id": "469cf8aa-5d9b-4bcb-bafc-8a2576b6f504",
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

:::info

Webhooks will be retried several times with an exponential time increment if your endpoint does not respond with an HTTP code in the range 2XX.

:::

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