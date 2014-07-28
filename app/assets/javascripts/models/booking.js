HeirBnb.Models.Booking = Backbone.Model.extend({
    urlRoot: 'api/bookings',

    space: function (){
      this._space = this._space ||
          new HeirBnb.Models.Space();
      return this._space;
    },

    user: function (){
      this._user = this._user ||
          new HeirBnb.Models.User();
      return this._user;
    },

    parse: function (payload) {
      if (payload.space){
        this.space().set(payload.space, {parse: true});
        delete payload.space;
      }

      if (payload.user){
        this.user().set(payload.user, {parse: true});
        delete payload.user;
      }

      return payload;
    }
});
