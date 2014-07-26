HeirBnb.Views.UserShow = Backbone.CompositeView.extend({
  template :  JST['user/show'],

  initialize : function (){
    this.listenTo(this.model, 'sync', this.render);
  },

  addReview: function (review){
    var reviewShow = new HeirBnb.Views.ReviewShow({ model: review });
    this.addSubview('#reviews-box', reviewShow);
  },


  render : function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.reviews().each(function(review){
      that.addReview(review);
    });

    var editModal = new HeirBnb.Views.UserEdit({ model: this.model });
    this.addSubview('#edit-button', editModal);
    return this;
  }
});
