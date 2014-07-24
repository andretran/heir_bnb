HeirBnb.Routers.Spaces = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '' : 'index'
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

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }

});
