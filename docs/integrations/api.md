---
slug: /integrations/api
---

# API

L’API URLR est disponible pour tous les utilisateurs.

Pour commencer à l’utiliser, vous devez générer une clé API depuis les paramètres de votre espace de travail.

**Documentation :** [https://docs.urlr.me/api-reference/v2/](https://docs.urlr.me/api-reference/v2/)

## SDK officiels

Pour faciliter l’intégration, nous proposons des SDK officiels :

* **PHP :** [https://github.com/urlr/urlr-php](https://github.com/urlr/urlr-php)
* **JavaScript :** [https://github.com/urlr/urlr-javascript](https://github.com/urlr/urlr-javascript)
* **Python :** [https://github.com/urlr/urlr-python](https://github.com/urlr/urlr-python)

## Migration de l’API V1 vers V2

La version 2 introduit une API plus simple et plus cohérente :

* L’authentification se fait désormais via une clé API générée dans votre espace de travail (plus besoin de jeton JWT)
* Le paramètre `team_id` a été supprimé, car chaque clé API est désormais directement liée à un espace de travail
* Les endpoints ont été renommés afin d’améliorer la clarté et la cohérence de l’API
