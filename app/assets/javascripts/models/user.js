HeirBnb.Models.User = Backbone.Model.extend({
  urlRoot: 'users',

  reviews: function (){
    this._reviews = this._reviews ||
        new HeirBnb.Collections.Reviews([], { reviewable: this });
    return this._reviews;
  },

  parse: function (payload) {
    if (payload.avatar) {
      this.set('avatar_url', payload.avatar, { parse: true });
      delete payload.avatar;
    }

    if (payload.review){
      this.reviews().set(payload.review, { parse: true });
      delete payload.reviews;
    }

    return payload;
  }

});
