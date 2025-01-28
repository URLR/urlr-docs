---
slug: domaine-personnalise/configuration
---

# Configuration d'un domaine personnalisé

Utiliser un domaine personnalisé pour réduire vos liens permet d'améliorer votre image de marque en partageant des liens facilement identifiables par vos utilisateurs.

## Pré-requis

- Être en mesure d'obtenir un domaine ou un sous-domaine dédié
- Avoir créé une équipe au sein de votre compte URLR

:::warning

Le domaine personnalisé que vous choisissez doit être spécifiquement réservé à l'utilisation d'URLR. La démarche la plus pratique consiste à sélectionner un sous-domaine de votre site web existant. N'hésitez pas à partager cette documentation avec la personne capable d'effectuer ces démarches si vous n'êtes pas la personne en charge.

:::

## Quelques exemples de bons sous-domaines

- **l.**
- **go.**
- **r.**

Tout au long de ce guide, nous allons considérer que notre site web est **mon-domaine.fr**.

Afin de réduire nos liens avec un domaine personnalisé sans achat supplémentaire, nous allons configurer le sous-domaine **l.mon-domaine.fr**.

:::info

Nous choisissons la lettre **l** comme sous-domaine dans cet exemple comme raccourci du mot **liens**.

:::

## Ajout du domaine sur URLR    

Commençons par l'ajouter dans votre équipe. Accéder à la section **Domaines personnalisés** de votre équipe, cliquez sur **Ajouter un domaine** et enfin renseignez votre domaine.

<img src="/img/docs/custom-domain/custom-domain.png" width="500" />

## Modification des DNS

Pour que votre domaine soit relié à URLR, il est nécessaire de créer une entrée CNAME dans la zone DNS de celui-ci.

Voici l'entrée correspondante: 

```
l.mon-domaine.fr. CNAME urlr.me.
```

Veuillez notez la présence du point à la suite du nom de domaine.

:::info

Le processus de propagation suite à la modification de vos DNS peut prendre jusqu'à 24h.
La réussite de cette opération sera signifiée dans votre tableau de bord lorsque l'étape CNAME passera du **rouge** au **vert**.

:::

Vous trouverez comment effectuer cette opération avec quelques fournisseurs de domaine ci-dessous.

### OVH

Rendez-vous dans la section **Zone DNS** de votre domaine et cliquez sur le bouton **Ajouter une entrée**.

Si vous ne configurez pas un sous-domaine, laissez simplement le premier champ vide.

<img src="/img/docs/custom-domain/dns-cname-ovh.png" width="500" />

### Méthode alternative

Si vous ne pouvez pas ajouter d'entrée CNAME sur votre domaine, vous pouvez alors plutôt ajouter ces entrées de type A :

- 91.208.207.214
- 91.208.207.215
- 91.208.207.216
- 91.208.207.217
- 91.208.207.218
- 91.208.207.220
- 91.208.207.221
- 91.208.207.222
- 91.208.207.223

## Activation

Dès la propagation DNS effectuée, vous pourrez déjà utiliser votre propre domaine personnalisé. Nous vous conseillons tout de même d’attendre l'étape de la génération du certificat SSL pour bénéficier du HTTPS.

:::info

Il est possible que vous voyez temporairement un avertissement de votre navigateur en visitant vos liens réduits lorsque le certificat n'a pas encore été généré.

:::

<img src="/img/docs/custom-domain/custom-domain-validation.png" width="500" />

## Assignation du domaine à un dossier

Afin de pouvoir réduire des liens en utilisant votre domaine, il est nécessaire de l'assigner à un (ou plusieurs) dossiers. Rendez-vous dans le dossier de votre choix, cliquez sur **Domaine personnalisé** et choisissez votre domaine précédemment configuré.

<img src="/img/docs/custom-domain/custom-domain-folder.png" width="500" />

## Utiliser le domaine pour réduire un lien

Maintenant que tout est en place, il vous suffit de **sélectionner le dossier** associé à votre domaine lorsque vous souhaitez réduire un lien depuis la page d'accueil.

<img src="/img/docs/custom-domain/custom-domain-shortening.png" width="1000" />

Réduisez votre lien... et voilà le résultat !

<img src="/img/docs/custom-domain/custom-domain-shorten.png" width="500" />
