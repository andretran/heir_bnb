HeirBnb.Models.User = Backbone.Model.extend({
  urlRoot: 'users',

  reviews: function (){
    this._reviews = this._reviews ||
        new HeirBnb.Collections.Reviews([], { reviewable: this });
    return this._reviews;
  },

  listings: function (){
    this._listings = this._listings ||
        new HeirBnb.Collections.Spaces([], { user: this });
    return this._listings;
  },

  bookings: function (){
    this._bookings = this._bookings ||
        new HeirBnb.Collections.Bookings([], { user: this });
    return this._bookings;
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

    if (payload.listings){
      this.listings().set(payload.listings, { parse: true });
      delete payload.listings;
    }

    if (payload.bookings){
      this.bookings().set(payload.bookings, { parse: true});
      delete payload.bookings;
    }

    return payload;
  }

});
