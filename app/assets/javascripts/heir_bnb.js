window.HeirBnb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    HeirBnb.spaces = new HeirBnb.Collections.Spaces();

    new HeirBnb.Routers.Spaces({
        '$rootEl' : $('#main')
    });
    Backbone.history.start();
  }
};