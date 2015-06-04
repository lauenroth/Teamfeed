
RSSFeeds = new Mongo.Collection("rssfeeds");

RSSFeeds.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    autoform: {
      rows: 2
    }
  },
  url: {
    type: String,
    label: "URL",
    autoform: {
      rows: 1
    }
  }
}));