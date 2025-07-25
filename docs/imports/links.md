---
slug: /imports/liens
---

# Import de liens par fichier

L'import de liens par fichier vous permet de créer ou de modifier plusieurs liens courts en une seule opération, simplifiant ainsi l'intégration ou la migration de vos données.

## Pré-requis

Ce fichier doit respecter certaines règles pour fonctionner correctement :

- Être au format CSV ou JSON
- Ne pas contenir d'en-têtes
- Contenir un lien par ligne
- 10 000 liens maximum par fichier
- Utiliser un des caractères délimiteur pris en charge (CSV)

:::info

Le format JSON permet de tirer parti de l’ensemble des fonctionnalités disponibles pour la création ou la modification de liens, tandis que le format CSV se limite aux fonctionnalités les plus basiques.

:::

:::info

Tous les champs sont optionnels sauf le champ `url`.
Les identifiants (UUID) sont disponibles dans l’interface URLR, au niveau de chaque entité concernée (ex. : dossiers, tags, ...).

:::

## Import

Rendez vous sur votre interface [URLR](https://urlr.me/app/?r=import_links) dans la section **Import** puis cliquez sur **Télécharger un fichier**.

### JSON

Le fichier JSON doit respecter la même structure et contenir les mêmes champs que [les paramètres de l’API](https://docs.urlr.me/api-reference/v1/#tag/Links/operation/createLink).  

#### Champs supportés

Toutes les options supportées par l’API sont également compatibles avec l’importation via JSON.

Vous trouverez un exemple de fichier JSON plus bas dans la page.

### CSV

#### Caractère délimiteur

Les colonnes d'un fichier CSV sont délimitées par un caractère délimiteur.
Le plus courant est la virgule. Si votre fichier en utilise un autre, vous avez la possibilité de le spécifier dans l'interface :

<img src="/img/docs/import/delimiter.png" width="500" />

#### Champs supportés

| Champ                     | Format                                     | Description                                                        | Requis (création / modification) |
| ------------------------- | ------------------------------------------ | ------------------------------------------------------------------ | -------------------------------- |
| link\_id                  | string (UUID)                              | Seulement pour modification d'un lien existant                     | ❌ / ✅                            |
| url                       | string                                     | URL à raccourcir                                                   | ✅ / ❌      |
| code                      | string                                     | Code personnalisé (slug) du lien                                   | ❌ / ❌                            |
| domain                    | string (hôte)                    | Domaine personnalisé à utiliser                                    | ❌ / ❌                            |
| folder\_id                | string (UUID)                              | Identifiant du dossier où stocker le lien                          | ❌ / ❌                            |
| label                     | string                                     | Libellé pour identifier le lien                                    | ❌ / ❌                            |
| password                  | string                                     | Mot de passe pour accéder au lien                                  | ❌ / ❌                            |
| tags                      | string (UUID)                              | Liste d’identifiants de tags, séparés par des virgules (maximum 3) | ❌ / ❌                            |
| expired\_url              | string (URL)                               | URL de redirection après expiration                                | ❌ / ❌                            |
| expired\_at               | ISO-8601 (ex: `2027-12-31T23:59:59+00:00`) | Date d'expiration du lien                                          | ❌ / ❌                            |
| delete\_after\_expiration | boolean (`true` ou `false`)                | Supprimer le lien après expiration                                 | ❌ / ❌                            |
| delete\_at                | ISO-8601                                   | Date de suppression programmée                                     | ❌ / ❌                            |

Le fichier CSV **doit contenir une ligne d'en-tête** mentionnant les champs supportés, dans **n'importe quel ordre**. Seuls les champs présents dans l'en-tête seront traités.

Vous trouverez un exemple de fichier CSV plus bas dans la page.

### Fichiers d'exemple

Voici des exemples de fichiers que vous pouvez utiliser comme base pour réaliser votre import :

- **CSV** : [sample.csv](/import/sample.csv)
- **JSON** : [sample.json](/import/sample.json)

Si un import échoue, vous retrouverez le détails des erreurs avec les numéros de lignes impactés.