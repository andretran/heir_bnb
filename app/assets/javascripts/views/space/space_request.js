HeirBnb.Views.SpaceRequest = Backbone.View.extend({
  template: JST['booking/request'],
  className: 'col-xs-6 request-card',

  events : {
    'click .accept-button' : 'accept',
    'click .decline-button' : 'decline'
  },

  accept : function (event){
    var that = this;
    $.ajax({
      url : 'api/bookings/accept/' + this.model.id,
      type : 'put',
      success : function () {
        that.model.trigger('change', that.model);
      }
    });
  },

  decline : function (event){
    var that = this;
    $.ajax({
      url : 'api/bookings/decline/' + this.model.id,
      type : 'put',
      success : function () {
        that.model.trigger('change', that.model);
      }
    });
  },

  render: function () {
    var renderedContent = this.template({ request: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
