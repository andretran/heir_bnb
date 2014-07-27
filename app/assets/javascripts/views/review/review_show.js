HeirBnb.Views.ReviewShow = Backbone.View.extend({
  template: JST['review/show'],
  className: 'row review-show',

  render: function () {
    var renderedContent = this.template({ review: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
