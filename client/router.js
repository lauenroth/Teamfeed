
/* Configuration*/
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});


/* Routes */
Router.route('/', {'name' : 'feed'}, function () {
  this.render('feed', {
    // data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('profile');


// show login page if user is not authenticated yet
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});