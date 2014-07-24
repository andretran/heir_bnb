HeirBnb.Models.Space = Backbone.Model.extend({
  urlRoot: "/api/spaces",

  parse: function (payload) {

    
    this.set('user_avatar', payload.user_avatar, { parse: true });
    this.set('photo_url', payload.cover_photo, { parse: true });
    delete payload.user_avatar;
    delete payload.cover_photo;


    return payload;
  }

});
