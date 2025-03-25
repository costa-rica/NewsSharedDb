const sequelize = require("./_connection");
const Article = require("./article");
const Keyword = require("./keyword");
const NewsApiRequest = require("./newsApiRequest");
const NewsArticleAggregatorSource = require("./newsArticleAggregatorSource");
const RssLinkRequest = require("./rssLinkRequest");

// Run all associations
require("./_associations");

module.exports = {
  sequelize,
  Article,
  Keyword,
  NewsApiRequest,
  NewsArticleAggregatorSource,
  RssLinkRequest,
};
