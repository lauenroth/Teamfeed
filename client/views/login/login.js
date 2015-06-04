Template.login.events({
  'submit form': function(e) {
    e.preventDefault();
    var email = $('input[type="email"]').val();
    var password = $('input[type="password"]').val();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error && error.reason === "Incorrect password") {
        alert('Wrong password. Did you forget it?')
      }
      else if (error) {
        console.log(error);
        alert('You don\'t seem to have an account yet :(');
        Accounts.createUser({
          username: email,
          email: email,
          password: password
        }, function(error) {
          if (error) {
            console.log(error);
            alert('Account could not be created!');
          }
          else {
            alert('Successfully created account :)');
          }
        });
      }
    });
    
  }
});