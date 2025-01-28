---
slug: /integrations/webhooks
---

# Webhooks

Vous avez la possibilité de vous abonner à des webhooks à partir de vos dossiers.
Les webhooks permettent de recevoir une information suite à un événement se produisant à partir de votre compte URLR.

## Événements disponibles

| Nom | Description |
|-----|-------------|
| Lien cliqué | Événement envoyé à chaque clic reçu par un lien du dossier |

## Format d'une requête

Requête POST sur votre URL configurée sur URLR.

### Headers

| Header | Description | Valeur d'exemple |
|--------|-------------|---------------|
| date | Date d'envoi | Sun, 15 Oct 2023 19:28:47 GMT |
| user-agent | User-Agent | URLR |
| x-signature | Signature pour vérifier le webhook | fef82811b8c21eddf3202a50f069ada534bdb0263508b122d24a878d005dc26a |
| content-type | Format du body | application/json |

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

Les webhooks seront réessayés plusieurs fois avec un incrément de temps exponentiel si votre endpoint ne répond pas avec un code HTTP 2XX.

:::

## Sécurisation

Il est important de vous assurer que les webhooks que vous allez recevoir sont envoyés par URLR.

Pour cela, vous allez utiliser votre **clé secrète** que vous pouvez retrouver dans la configuration de vos webhooks et la valeur du champ **x-signature** dans les headers.

Le but est de générer une valeur de clé de hachage à partir du body, en utilisant la méthode HMAC, et de la comparer avec la signature reçue.

:::info

Encodez le body en JSON et échappez les slashs (/) pour obtenir un hmac valide.

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