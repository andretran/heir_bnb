HeirBnb.Routers.Spaces = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '' : 'index',
    'spaces/new' : 'new'
  },

  index: function () {
    var that = this;

    HeirBnb.spaces.fetch({
      success: function () {
        var indexView = new HeirBnb.Views.SpacesIndex({
          collection : HeirBnb.spaces
        });
        that._swapView(indexView);
      }
    });
  },

  new: function () {
    var that = this;

    var newSpace = new HeirBnb.Models.Space();
    var formView = new HeirBnb.Views.SpaceNew({
      collection: HeirBnb.spaces,
      model: newSpace
    });

    that._swapView(formView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }

});
