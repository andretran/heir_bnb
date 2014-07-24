HeirBnb.Models.Space = Backbone.Model.extend({
  urlRoot: "/api/spaces",

  parse: function (payload) {
    if (payload.photo) {
      this.set('photo_url', payload.photo, { parse: true });
      delete payload.photo;
    }

    return payload;
  }

});
