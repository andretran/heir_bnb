HeirBnb.Views.UserEdit = Backbone.View.extend({
  template: JST['user/edit'],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
