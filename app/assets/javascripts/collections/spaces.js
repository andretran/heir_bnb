HeirBnb.Collections.Spaces = Backbone.Collection.extend({
  model: HeirBnb.Models.Space,
  url: 'api/spaces',

  getOrFetch: function (id) {
    var spaces = this;

    var space;
    if (space = this.get(id)) {
      space.fetch();
    } else {
      space = new HeirBnB.Models.Space({ id: id });
      space.fetch({
        success: function () { spaces.add(space); }
      });
    }

    return space;
  }
});
