HeirBnb.Views.UserRequest = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  addRequest: function (request) {
    var requestView = new HeirBnb.Views.SpaceRequest({ model: request });
    this.addSubview('#listings', requestView);
  },

  render: function () {
    var renderedContent = this.template({ user : this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.requests().each( function (request){
      that.addRequest(request);
    });
    
    return this;
  }
});
