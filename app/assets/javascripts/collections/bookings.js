HeirBnb.Collections.Bookings = Backbone.Collection.extend({
  model: HeirBnb.Models.Booking,
  url: 'bookings',

  getOrFetch: function (id) {
    var bookings = this;

    var booking;
    if (booking = this.get(id)) {
      booking.fetch();
    } else {
      booking = new HeirBnb.Models.Booking({ id: id });
      booking.fetch({
        success: function () { bookings.add(booking); }
      });
    }

    return booking;
  }
});
