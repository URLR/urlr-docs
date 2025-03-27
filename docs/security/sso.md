---
slug: /security/sso
---

# Authentification SSO

L'authentification par SSO (Single Sign-On) est possible avec URLR. Nous distinguons deux types de SSO : le **SSO social** et le **SSO d'entreprise**. Nous utilisons [Keycloak](https://www.keycloak.org/), une solution open-source auto-hébergée, pour gérer ces authentifications.

## SSO social

Le SSO social permet aux utilisateurs de s'authentifier via des fournisseurs d'identité tiers. Voici les fournisseurs actuellement supportés :

| Fournisseur | Supporté |
|-------------|----------|
| Google      | ✅       |

## SSO d'entreprise

Le SSO d'entreprise est disponible pour tous les clients ayant souscrit à un forfait "Personnalisé". La mise en place de ce SSO se fait sur demande après contractualisation.

Nous supportons tous les types de connexion supportés par Keycloak, notamment :

- OpenID Connect (OIDC)
- SAML 2.0
<!-- - LDAP/Active Directory -->

Cette flexibilité permet de s'adapter aux besoins spécifiques de chaque entreprise.
