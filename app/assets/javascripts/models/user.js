HeirBnb.Models.User = Backbone.Model.extend({
  url: '/user',

  parse: function (payload) {
    if (payload.avatar) {
      this.set('avatar_url', payload.avatar, { parse: true });
      delete payload.avatar;
    }

    return payload;
  }

});
