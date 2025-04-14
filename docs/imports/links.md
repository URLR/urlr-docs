---
slug: /imports/liens
---

# Import de liens par fichier

L'import de liens par fichier (au format CSV) vous permet d'ajouter plusieurs liens courts en une seule opération, facilitant ainsi l'intégration vos données ou la migration de ces dernières.

## Pré-requis

Ce fichier doit respecter certaines règles pour fonctionner correctement :

- Utiliser le format CSV
- Ne pas contenir d'en-têtes
- Contenir un lien par ligne
- 10 000 liens maximum par fichier
- Utiliser un des caractères délimiteur pris en charge

## Import

Rendez vous sur votre interface [URLR](https://urlr.me/app/?r=import_links) dans la section **Import** puis cliquez sur **Télécharger un fichier**.

### Caractère délimiteur

Les colonnes d'un fichier CSV sont délimitées par un caractère délimiteur.
Le plus courant est la virgule. Si votre fichier en utilise un autre, vous avez la possibilité de le spécifier dans l'interface :

<img src="/img/docs/import/delimiter.png" width="500" />

### Dossier

Vous pouvez déterminer dans quel dossier seront importés vos liens.

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