HeirBnb.Views.SpaceShow = Backbone.CompositeView.extend({
  template: JST['space/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    // this.listenTo(this.model.reviews(), 'add', this.addReview);
  },

  addReview: function (review){
    var reviewShow = new HeirBnb.Views.ReviewShow({ model: review });
    this.addSubview('#reviews-box', reviewShow);
  },

  render: function () {
    var renderedContent = this.template({ space: this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.reviews().each(function(review){
      that.addReview(review);
      if (review != that.model.reviews().last){
        $('#reviews-box').append('<hr align="left" class="review-divider"></hr>');
      }
    });

    var newBooking = new HeirBnb.Models.Booking();
    this.addSubview('.review-form', new HeirBnb.Views.BookingNew({ model: newBooking }));

    return this;
  }
});
