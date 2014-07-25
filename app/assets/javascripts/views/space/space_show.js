HeirBnb.Views.SpaceShow = Backbone.View.extend({
  template: JST['space/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var renderedContent = this.template({ space: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
