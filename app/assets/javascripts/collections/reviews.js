HeirBnb.Collections.Reviews = Backbone.Collection.extend({
  model: HeirBnb.Models.Review,
  url : function () {
    return this.url() + "/reviews";
  },

  initialize: function (models, options){
    this.reviewable = options.reviewable;
  }
});
