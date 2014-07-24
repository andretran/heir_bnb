HeirBnb.Views.SpacesIndex = Backbone.View.extend({
  template: JST['space/index'],

  render: function () {
    var renderedContent = this.template({ spaces: this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});
