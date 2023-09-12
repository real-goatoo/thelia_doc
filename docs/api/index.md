---
title: API 
---

Since 2.6.0 Thelia provide an admin API. This API is made with [ApiPlatform](https://api-platform.com/) and generate automatically an online documentation at yoursite.com/api/docs.

Api platform has good documentation who can be readed [here](https://api-platform.com/docs/distribution/) but there are some specification due to Thelia and more specifically due to Propel instead of Doctrine as ORM.
This is the list of difference : 

- Api Resources, in propel Model are generated automatically as you change your schema so they can't be used as Api resource directly that's why we have to create a new class for each Propel model we want to be in API.
- Resource addon, to allow module to add field in existing Thelia api route we have create the addons.
- 