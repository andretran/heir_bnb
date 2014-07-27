HeirBnb.Views.BookingNew = Backbone.View.extend({
  template: JST['booking/new'],

  render: function (){
    var renderedContent = this.template({ booking: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
