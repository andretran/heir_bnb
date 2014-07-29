HeirBnb.Views.SpaceListing = Backbone.View.extend({
  template: JST['space/listing'],
  className: 'col-xs-4 space-listing-card',

  events : {
    'click .delete-button' : 'deleteSpace'
  },

  deleteSpace : function (event) {
    this.model.destroy();
    this.remove();
  },

  render : function () {
    var renderedContent = this.template({ space: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
