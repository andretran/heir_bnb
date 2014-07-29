HeirBnb.Views.UserShow = Backbone.CompositeView.extend({
  template :  JST['user/show'],
  classname: 'col-xs-12 container-full user-show-container',

  initialize : function (){
    this.listenTo(this.model, 'sync', this.render);
  },

  addReview: function (review){
    var reviewShow = new HeirBnb.Views.ReviewShow({ model: review });
    this.addSubview('.user-reviews-box', reviewShow);
  },


  render : function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.reviews().each(function(review){
      that.addReview(review);
    });

    var editModal = new HeirBnb.Views.UserEdit({ model: this.model });
    this.addSubview(this.$('.left-user-show'), editModal);
    return this;
  }
});
