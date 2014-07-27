HeirBnb.Views.SpacesIndex = Backbone.View.extend({
  template: JST['space/index'],
  className: 'container-full',


  initialize: function () {
    this.listenTo(this.collection, 'add sync', this.render);
  },

  render: function () {
    this.$el.empty();

    // put map here

    this.$el.append('<div class="col-xs-5"></div>')


    var renderedContent = this.template({ spaces: this.collection });
    this.$el.append(renderedContent);
    return this;
  }
});
