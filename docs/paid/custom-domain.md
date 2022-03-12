---
slug: /fonctionnalites-premium/domaine-personnalise
sidebar_position: 2
---

# Configurer un domaine personnalisé

Utiliser un domaine personnalisé pour vos liens réduits permet d'améliorer votre image de marque en partageant des liens facilement identifiables par votre cible.

## Pré-requis

- Être en possession d'un domaine (un sous-domaine fonctionne également)
- Avoir créé une équipe dans votre tableau de bord URLR
- Avoir créé un dossier dans l'espace des liens URLR

#### Important

Le domaine choisi doit être réservé à l'utilisation d'URLR. C'est pourquoi il peut-être utile parfois de créer un sous-domaine.

## Ajout du domaine sur URLR

Pour les besoins de ce guide, nous allons vouloir configurer le domaine **r.votre-domaine.fr**.

Commençons par l'ajouter dans votre espace d'équipe. Accéder à la section **Domaines personnalisés** de votre équipe, cliquez sur **Ajouter un domaine** et enfin renseignez votre domaine.

<img src="/img/docs/custom-domain/custom-domain.png" width="500" />

## Modification des DNS

Pour que votre domaine soit relié à URLR, il est nécessaire de créer une entrée CNAME dans la zone DNS de celui-ci.

Voici l'entrée correspondante: `r.votre-domaine.fr. CNAME urlr.me.` Veuillez notez la présence du point à la suite du nom de domaine.

Pour ajouter cette entrée, vous pouvez vous appuyez sur les exemples ci-dessous en fonction de votre fournisseur de domaine.

#### Note

La modification de la zone peut prendre jusqu'à 48h pour être déployée.
La réussite de cette opération sera signifiée dans votre tableau de bord lorsque l'étape CNAME passera du **rouge** au **vert**.

<img src="/img/docs/custom-domain/custom-domain-validation.png" width="500" />

### OVH

Rendez-vous dans la section **Zone DNS** de votre domaine et cliquez sur le bouton **Ajouter une entrée**.
Si vous ne souhaitez pas utiliser de sous-domaine supplémentaire, laissez simplement le champ "sous-domaine" vide.

<img src="/img/docs/custom-domain/dns-cname-ovh.png" width="500" />

## Activation de notre équipe

Le domaine ne pourra être utilisé seulement lorsque la deuxième étape **Activation**, qui est une validation de notre côté (URLR), passera elle aussi du **rouge** au **vert**.

Cette activation est généralement réalisée sous 1h et au maximum sous 12h.

<img src="/img/docs/custom-domain/custom-domain-validation2.png" width="500" />

## Assignation du domaine à un dossier

Enfin, afin de pouvoir réduire des liens en utilisant votre domaine, il est nécessaire de l'assigner à un (ou plusieurs) dossiers. Rendez-vous dans le dossier de votre choix, cliquez sur **Domaine personnalisé** et choisissez votre domaine précédemment configuré.

<img src="/img/docs/custom-domain/custom-domaine-folder.png" width="500" />

## Utilisation pour réduire un lien

Maintenant que tout est en place, il vous suffit de **sélectionner le dossier** auquel votre domaine est associé lorsque vous souhaitez réduire un lien.

<img src="/img/docs/custom-domain/custom-domain-shortening.png" width="500" />

Et voilà le résultat !

<img src="/img/docs/custom-domain/custom-domain-shorten.png" width="500" />
