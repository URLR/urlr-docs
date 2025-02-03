---
slug: /migration/rebrandly
---

# Migration depuis Rebrandly

Ce guide vous explique comment migrer vos liens réduits depuis **Rebrandly** vers **URLR** et gérer les statistiques existantes en quelques étapes simples. Suivez les instructions ci-dessous pour effectuer cette migration.

## Pré-requis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Un compte Rebrandly avec accès à l'API
- Un compte URLR (Forfait **Pro** ou plus requis)

:::warning

Vous pouvez uniquement importer des liens Bitly qui utilisent un [nom de domaine personnalisé](https://support.rebrandly.com/hc/en-us/articles/224917167-What-is-a-Custom-Branded-Domain-Name) venant de Rebrandly.

:::

## Liens

### Exporter vos liens depuis Rebrandly

Rebrandly ne permet pas d'exporter vos liens courts depuis leur interface. Néanmoins, vous pouvez les exporter grâce à leur API. Pour ce faire, vous devez suivre [leur documentation](https://developers.rebrandly.com/recipes/export-links-to-csv) à ce sujet.

Les informations à extraire avec l'API Rebrandly sont les suivantes :

- URL de destination (destination)
- Domaine (domain)
- Code court (slashtag)

C'est ces trois informations qui seront utilisées pour construire le fichier d'import pour URLR.

### Importer vos liens dans URLR

Maintenant que vous êtes en possession de votre fichier CSV, vous allez devoir le formater puis l'importer. Vous trouverez de l'aide via la [documentation](imports/links.md).

## Statistiques

### Exporter vos statistiques depuis Rebrandly

Il n'est pas possible d'importer vos statistiques sur URLR néanmoins, nous vous conseillons d'**exporter vos statistiques** et de les **sauvegarder au cas où vous en ayez besoin**.
