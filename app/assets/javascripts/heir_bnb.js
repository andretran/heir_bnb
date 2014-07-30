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

    $('.space-new').on('click', function () {
      Backbone.history.navigate("spaces/new", { trigger: true });
    });

    var searchOptions = {
      lookup: [
        "King's Landing, Westeros",
        "Winterfell, Westeros",
        "Crossroads Inn, Westeros",
        "Castle Black, Westeros",
        "Casterly Rock, Westeros",
        "Highgarden, Westeros",
        "Pento, Essos"
      ]
    }
    $('#search-bar').autocomplete(searchOptions);

    $('.search-form').submit(function(e) {
      e.preventDefault();
      var SHA1 = new Hashes.SHA1;
      var searchLocation = $('#search-bar').val()
      var searchSpaces = HeirBnb.spaces.where({ location: searchLocation });
        HeirBnb.searchQuery = new HeirBnb.Collections.Spaces(searchSpaces);
      Backbone.history.navigate("search/" + SHA1.hex(searchLocation) , {trigger: true});
    });
  }
};
