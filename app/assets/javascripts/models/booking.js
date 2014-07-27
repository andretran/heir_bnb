HeirBnb.Models.Booking = Backbone.Model.extend({
    urlRoot: 'api/bookings',

    space: function (){
      this._space = this._space ||
          new HeirBnb.Models.Space();
      return this._space;
    },

    parse: function (payload) {
      if (payload.space){
        this.space().set(payload.space, {parse: true});
        delete payload.space;
      }

      return payload;
    }
});
