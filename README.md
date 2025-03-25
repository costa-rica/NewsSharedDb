# NewsSharedDb

A shared Sequelize SQLite module for the News microservices system.

This package centralizes the database connection, models, and associations so multiple Node.js apps can share and interact with the same database consistently.

---

## 📦 Installation

Add to your project using Yarn (recommended):

```bash
yarn add file:../NewsSharedDb
```

## Use / Import Example

```js
const {
  sequelize,
  Article,
  Keyword,
  NewsApiRequest,
  NewsArticleAggregatorSource,
  RssLinkRequest,
} = require("NewsSharedDb");
```
