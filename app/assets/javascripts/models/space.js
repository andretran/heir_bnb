HeirBnb.Models.Space = Backbone.Model.extend({
  urlRoot: "/api/spaces",

  reviews: function (){
    this._reviews = this._reviews ||
        new HeirBnb.Collections.Reviews([], { reviewable: this });
    return this._reviews;
  },

  parse: function (payload) {

    if (payload.review){
      this.reviews().set(payload.review, { parse: true });
      delete payload.reviews;
    }
    this.set('user_name', payload.user_name, {parse: true});
    this.set('user_id', payload.user_id, {parse: true});
    this.set('user_avatar', payload.user_avatar, { parse: true });
    this.set('photo_url', payload.cover_photo, { parse: true });
    delete payload.user_id;
    delete payload.user_name;
    delete payload.user_avatar;
    delete payload.cover_photo;





    return payload;
  }

});
