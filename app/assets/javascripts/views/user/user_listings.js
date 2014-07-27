HeirBnb.Views.UserListings = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  addSpace: function (space){
    var spaceListing = new HeirBnb.Views.SpaceListing({model : space});
    this.addSubview('#listings',spaceListing);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this
    this.model.listings().each(function (space){
      that.addSpace(space);
    });

    debugger;
    return this;
  }
});
