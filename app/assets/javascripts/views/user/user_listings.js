HeirBnb.Views.UserListings = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  initialize: function () {
    this.listenTo(this.model.listings(), 'remove', this.removeSpace);
  },

  addSpace: function (space){
    var spaceListing = new HeirBnb.Views.SpaceListing({model : space});
    this.addSubview('#listings',spaceListing);
  },

  removeSpace: function (space){
    var spaceListingView =
            _(this.subviews()['#listings']).find(function (subview) {
              return subview.model == space;
            });

    this.removeSubview('#listings', spaceListingView);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this
    this.model.listings().each(function (space){
      that.addSpace(space);
    });
    return this;
  }
});
