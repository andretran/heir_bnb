HeirBnb.Views.BookingNew = Backbone.View.extend({
  template: JST['booking/new'],

  render: function (){
    debugger;
    // var bookedDates =
    var renderedContent = this.template({ booking: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
