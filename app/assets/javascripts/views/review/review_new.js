HeirBnb.Views.ReviewNew = Backbone.View.extend({
  template: JST['review/new'],

  render: function (){
    var renderedContent = this.template({ review: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
