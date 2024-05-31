---
slug: /fonctionnalites-premium/import-fichier
sidebar_position: 3
---

# Réaliser un import de liens par fichier

Afin de réduire des liens en masse, nous proposons un système d'import par fichier.

Cette fonctionnalité est accessible depuis un **dossier préalablement créé**.

## Pré-requis

Ce fichier doit respecter certaines règles pour fonctionner correctement :

- Utiliser le format CSV
- Ne pas contenir d'en-têtes
- Contenir un lien par ligne
- 10 000 liens maximum par fichier
- Utiliser un des caractères délimiteur pris en charge

## Caractère délimiteur

Les colonnes d'un fichier CSV sont délimitées par un caractère délimiteur.
Le plus courant est la virgule. Si votre fichier en utilise un autre, vous avez la possibilité de le spécifier dans l'interface :

<img src="/img/docs/import/delimiter.png" width="500" />

## Import avec options avancées

Il est également possible de spécifier des options aux liens dans ce fichier comme vous pourriez le faire sur l'interface (mot de passe, code personnalisé, ...).

Ces options doivent être spécifiées dans les colonnes suivant les liens et respecter cet ordre :

| Champ | Colonne | Format
|---|---|---|
| url | 1 | string |
| date d'expiration | 2 | ISO-8601 |
| mot de passe | 3 | string |
| code personnalisé | 4 | string |
| label | 5 | string |

## Fichier d'exemple

Voici un fichier CSV que vous pouvez utiliser comme base pour réaliser votre import CSV :

[sample-import.csv](/csv/import/sample-import.csv)

Si un import échoue, vous retrouverez le détails des erreurs avec les numéros de lignes impactés.