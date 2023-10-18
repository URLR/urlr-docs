---
slug: /fonctionnalites-premium/webhooks
sidebar_position: 4
---

# Webhooks

Vous avez la possibilité de vous abonner à des webhooks à partir de vos dossiers.
Les webhooks permettent de recevoir une information suite à un événement se produisant à parti de votre compte URLR.

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

## Sécurisation

Il est important de vous assurer que les webhooks que vous allez recevoir sont envoyés par URLR.

Pour cela, vous allez utiliser votre **clé secrète** que vous pouvez retrouver dans la configuration de vos webhooks et la valeur du champ **x-signature** dans les headers.

Le but est de générer une valeur de clé de hachage à partir du body, en utilisant la méthode HMAC, et de la comparer avec la signature reçue.

Avec PHP, vous pourriez par exemple vérifier la signature de cette façon :

```php
<?php

function verifySignature(string $body, string $secretKey): bool {
    $signature = $_SERVER['x-signature'];

    $computedSignature = hash_hmac('sha256', $body, $secretKey);

    return hash_equals($computedSignature, $signature);
}
```