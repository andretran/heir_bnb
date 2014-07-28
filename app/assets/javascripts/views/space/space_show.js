HeirBnb.Views.SpaceShow = Backbone.CompositeView.extend({
  template: JST['space/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    // this.listenTo(this.model.reviews(), 'add', this.addReview);
  },

  events: {
    'submit form' : 'submit'
  },

  submit: function (event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['booking'];
    params.space_id = this.model.id;
    var newBooking = new HeirBnb.Models.Booking(params);
    newBooking.save({},{
      success : function(){
        $('.booking-button').remove();
        $('.booking-form').append(
          "<div class='pending-request-button'>Request has been sent!</div>"
          );
      },

      error : function (model, resp) {
        $('.errors').empty();
        _.each(resp.responseJSON.reverse(), function(error){
          $('.errors').prepend(
            "<div class='alert alert-danger'>" +
            error + "</div>"
          );
        });
      }
    });
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
    this.addSubview('.booking-form', new HeirBnb.Views.BookingNew({
      model: newBooking,
      collection: that.model.bookings()
    }));

    return this;
  }
});
