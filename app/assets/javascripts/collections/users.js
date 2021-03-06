HeirBnb.Collections.Users = Backbone.Collection.extend({
  model: HeirBnb.Models.User,
  url: 'users',

  getOrFetch: function (id) {
    var users = this;

    var user;
    if (user = this.get(id)) {
      user.fetch();
    } else {
      user = new HeirBnb.Models.User({ id: id });
      user.fetch({
        success: function () { users.add(user); }
      });
    }

    return user;
  }
});
