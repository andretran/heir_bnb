HeirBnb.Views.SpaceReservation = Backbone.View.extend({
  template: JST['space/reservation'],
  className: 'col-xs-12',

  initialize: function (options) {
    this.model = options.model;
    this.booking = options.booking_model;
  },

  render : function () {
    var renderedContent = this.template({ space: this.model, booking: this.booking });
    this.$el.html(renderedContent);
    return this;
  }
});
