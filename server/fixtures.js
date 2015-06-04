/* Initial Data that should be added when the App is deployed */


Meteor.startup(function() {

  if (Notes.find().count() === 0) {
    Notes.insert({
      title: 'A sample note',
      description: 'A short description of the note',
      note: 'This is just a sample note, so there is no real content in here. Could have been a lorem ipsum text as well...',
      created: new Date(),
      updated: new Date()
    });
  }

});