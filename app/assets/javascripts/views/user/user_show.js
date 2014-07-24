HeirBnb.Views.UserShow = Backbone.View.extend({
  template :  JST['user/show'],

  render : function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
