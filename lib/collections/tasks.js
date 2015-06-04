
Tasks = new Mongo.Collection("tasks");

Tasks.attachSchema(new SimpleSchema({
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
  dueDate: {
    type: Date,
    label: "Due date",
    optional: true
  },
  tags: {
    type: Object,
    label: 'Tags'
  },
  done: {
    type: Boolean,
    label: "Done",
  }
}));