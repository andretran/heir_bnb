HeirBnb.Views.UserRequest = Backbone.CompositeView.extend({
  template: JST['user/listings'],

  initialize: function (){
    this.listenTo(this.model.requests(), 'change', this.removeRequest);
  },

  addRequest: function (request) {
    var requestView = new HeirBnb.Views.SpaceRequest({ model: request });
    this.addSubview('#listings', requestView);
  },

  removeRequest: function (request){
    var requestView =
            _(this.subviews()['#listings']).find(function (subview) {
              return subview.model == request;
            });
    this.removeSubview('#listings', requestView);
  },


  render: function () {
    var renderedContent = this.template({ user : this.model });
    this.$el.html(renderedContent);

    var that = this;
    var pendingRequests = this.model.requests().where({ status: 'PENDING'} );
    _.each(pendingRequests, function (request){
      that.addRequest(request);
    });

    return this;
  }
});
