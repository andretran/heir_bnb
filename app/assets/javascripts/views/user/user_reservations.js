HeirBnb.Views.UserReservations = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  addSpace: function (booking){
    var spaceReservation = new HeirBnb.Views.SpaceReservation({
          model: booking
    });
    this.addSubview('#listings',spaceReservation);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this
    this.model.bookings().each(function (booking){
      that.addSpace(booking);
    });


    return this;
  }
});
