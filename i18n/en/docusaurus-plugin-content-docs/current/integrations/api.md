---
slug: /integrations/api
---

# API

The URLR API is available to all users.

To start using it, you must generate an API key from your workspace settings.

**Documentation:** [https://docs.urlr.me/api-reference/v2/](https://docs.urlr.me/api-reference/v2/)

## Official SDKs

To make integration easier, we provide official SDKs:

* **PHP:** [https://github.com/urlr/urlr-php](https://github.com/urlr/urlr-php)
* **JavaScript:** [https://github.com/urlr/urlr-javascript](https://github.com/urlr/urlr-javascript)
* **Python:** [https://github.com/urlr/urlr-python](https://github.com/urlr/urlr-python)

## Migration from API V1 to V2

Version 2 introduces a simplified and more consistent API experience:

* Authentication is now handled via an API key generated in your workspace (no more JWT token required)
* The `team_id` parameter has been removed, as each API key is now directly tied to a workspace
* Endpoints have been renamed for improved clarity and consistency across the API
