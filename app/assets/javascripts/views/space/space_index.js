HeirBnb.Views.SpacesIndex = Backbone.View.extend({
  template: JST['space/index'],
  initialize: function () {
    this.listenTo(this.collection, 'add sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ spaces: this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});
