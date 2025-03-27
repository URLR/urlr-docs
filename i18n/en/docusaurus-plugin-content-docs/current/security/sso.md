---
slug: /security/sso
---

# SSO Authentication

SSO (Single Sign-On) authentication is possible with URLR. We distinguish between two types of SSO: **social SSO** and **enterprise SSO**. We use [Keycloak](https://www.keycloak.org/), an open-source self-hosted solution, to manage these authentications.

## Social SSO

Social SSO allows users to authenticate via third-party identity providers. Here are the currently supported providers:

| Provider | Supported |
|----------|-----------|
| Google   | ✅        |

## Enterprise SSO

Enterprise SSO is available to all clients with "Custom" plans. The setup of this SSO is done on request after contractual agreement.

We support all types of connections supported by Keycloak, especially:

- OpenID Connect (OIDC)
- SAML 2.0
<!-- - LDAP/Active Directory -->

This flexibility allows us to adapt to the specific needs of each enterprise.