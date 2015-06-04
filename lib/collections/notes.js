
Notes = new Mongo.Collection("notes");

Notes.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Short description",
    optional: true,
    autoform: {
      rows: 2
    }
  },
  note: {
    type: String,
    label: "Note",
    autoform: {
      rows: 10
    }
  }
}));