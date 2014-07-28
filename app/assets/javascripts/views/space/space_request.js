HeirBnb.Views.SpaceRequest = Backbone.View.extend({
  template: JST['booking/request'],
  className: 'col-xs-6 request-card',

  events : {
    'click .accept-button' : 'accept',
    'click .decline-button' : 'decline'
  },

  accept : function (){

  },

  decline : function (){

  },

  render: function () {
    var renderedContent = this.template({ request: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
