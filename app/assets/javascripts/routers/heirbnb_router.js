HeirBnb.Routers.Spaces = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '' : 'index',
    'spaces/new' : 'new',
    'spaces/:id' : 'show'
  },

  index: function () {
    var that = this;

    // var container = $('<div class=container></div>')

    HeirBnb.spaces.fetch({
      success: function () {
        var indexView = new HeirBnb.Views.SpacesIndex({
          collection : HeirBnb.spaces
        });
        // container.htm(in)
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

  show : function (id) {
    var that = this;
    that._getSpace(id, function(space){
      var showView = new HeirBnb.Views.SpaceShow({
        model: space
      });

      that._swapView(showView);
    });
  },

  _getSpace : function (id, callback) {
      var space = HeirBnb.spaces.getOrFetch(id);
      if (!space){
        space = new HeirBnb.Models.Space({ id: id });
        space.collection = HeirBnb.spaces;
        space.fetch({
          success: function () {
            HeirBnb.spaces.add(space);
            callback(space);
          }
        });
      } else{
        callback(space);
      }
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }

});
