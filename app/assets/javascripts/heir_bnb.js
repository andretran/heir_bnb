window.HeirBnb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new HeirBnb.Routers.Boards({
        '$rootEl' : $('#main')
    });
  }
};
