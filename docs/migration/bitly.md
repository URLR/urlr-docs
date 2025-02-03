---
slug: /migration/bitly
---

# Migration depuis Bitly

Ce guide vous explique comment migrer vos liens réduits depuis **Bitly** vers **URLR** et gérer les statistiques existantes en quelques étapes simples. Suivez les instructions ci-dessous pour effectuer cette migration.



## Pré-requis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Un compte Bitly avec accès aux liens que vous souhaitez migrer (Forfait **Growth** ou plus requis)
- Un compte URLR (Forfait **Pro** ou plus requis)

:::warning

Vous pouvez uniquement importer des liens Bitly qui utilisent un [nom de domaine personnalisé](https://support.rebrandly.com/hc/en-us/articles/224917167-What-is-a-Custom-Branded-Domain-Name) venant de Bitly.

:::

## Liens

### Exporter vos liens depuis Bitly

Pour exporter vos liens depuis Bitly, suivez ces étapes : 

#### 1. Connectez-vous à votre compte Bitly

Accédez à [bitly.com](https://bitly.com) et connectez-vous à votre compte.

#### 2. Exporter

L'export de vos liens Bitly va se faire sous la forme d'un fichier CSV. Pour le générer, vous avez deux possibilités :

- [Exporter tous vos liens](#exporter-tous-vos-liens)
- [Exporter un groupe de liens](#exporter-un-groupe-de-liens)

##### Exporter tous vos liens

Vous pouvez exporter tous vos liens : 

- Cliquez sur **Liens** dans la barre latérale gauche
- Cliquez sur **Export**
- Entrez votre adresse email
- Allez sur votre messagerie et ouvrez le mail envoyé par Bitly
- Le fichier sera ensuite téléchargé automatiquement

Pour plus d'informations, rendez-vous sur la documentation de [bitly.com](https://support.bitly.com/hc/en-us/articles/230631767-How-do-I-export-link-data-for-a-select-group-of-links).

##### Exporter un groupe de liens

Vous pouvez aussi sélectionner un groupe de liens pour les exporter : 

- Cliquez sur **Liens** dans la barre latérale gauche
- Sélectionnez vos liens
- Cliquez sur **Export**
- Le téléchargement se lancera automatiquement

Pour plus d'informations, rendez-vous sur la documentation de [bitly.com](https://support.bitly.com/hc/en-us/articles/230631767-How-do-I-export-link-data-for-a-select-group-of-links).

##### Fichier CSV

Ensuite, vous devriez avoir obtenu le fichier CSV. Dans ce dernier, trois colonnes sont importantes :

- Lien (Link)
- Lien custom (Custom Link)
- Url de destination (Destination URL)

C'est ces trois colonnes qui seront utilisées pour le fichier d'import sur URLR.

### Importer vos liens dans URLR

Maintenant que vous êtes en possession de votre fichier CSV, vous allez devoir le formater puis l'importer. Vous trouverez de l'aide via la [documentation](imports/links.md).

## Statistiques

### Exporter vos statistiques depuis Bitly

Il n'est pas possible d'importer vos statistiques sur URLR néanmoins, nous vous conseillons d'**exporter vos statistiques** et de les **sauvegarder au cas où vous en ayez besoin**.