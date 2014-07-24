HeirBnb.Views.SpaceShow = Backbone.View.extend({
  template: JST['space/show'],

  render: function () {
    var renderedContent = this.template({ space: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
