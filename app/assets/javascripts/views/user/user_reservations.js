HeirBnb.Views.UserReservations = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  addSpace: function (space, booking){
    var spaceReservation = new HeirBnb.Views.SpaceReservation({
          booking_model: booking,
          model : space
    });
    this.addSubview('#listings',spaceReservation);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this
    this.model.bookings().each(function (booking){
      that.addSpace(booking.space(), booking);
    });


    return this;
  }
});
