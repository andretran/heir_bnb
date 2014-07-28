HeirBnb.Views.SpaceReservation = Backbone.View.extend({
  template: JST['space/reservation'],
className: 'col-xs-6 request-card',

  render : function () {
    var renderedContent = this.template({ reservation: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
