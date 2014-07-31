HeirBnb.Collections.Bookings = Backbone.Collection.extend({
  model: HeirBnb.Models.Booking,
  url: 'api/bookings',

  getOrFetch: function (id) {
    var bookings = this;

    var booking;
    if (booking = this.get(id)) {
      booking.fetch({
        success: function () {
          HeirBnb.userBookings.add(booking);
        }
      });
    } else {
      booking = new HeirBnb.Models.Booking({ id: id });
      booking.fetch({
        success: function () {
          HeirBnb.userBookings.add(booking);
          bookings.add(booking);
        }
      });
    }

    return booking;
  }
});
