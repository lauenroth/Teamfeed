
Meetings = new Mongo.Collection("meetings");

Meetings.attachSchema(new SimpleSchema({
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
  startDate: {
    type: Date,
    label: "Start date"
  },
  endDate: {
    type: Date,
    label: "End date"
  },
  location: {
    type: String,
    label: "Location",
    optional: true
  }
}));