
Journeys = new Mongo.Collection("journeys");

Journeys.attachSchema(new SimpleSchema({
  
  departingStation: {
    type: String,
    label: "Departing station"
  },
  arrivingStation: {
    type: String,
    label: "Arriving station"
  },
  time: {
    type: String,
    label: "Time"
  },
  isTimeToArrive: {
    type: Boolean,
    label: "Time is arriving time",
    defaultValue: true
  },
  days: {
    type: String,
    label: "Days",
    optional: true
  },
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: true
  }
  
}));