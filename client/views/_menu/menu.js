Template.menu.helpers({

  active: function(path) {
    var currentPath = Iron.Location.get().path;

    return currentPath === path ? 'active' : '';
    }
});