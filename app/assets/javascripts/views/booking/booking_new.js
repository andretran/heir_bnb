HeirBnb.Views.BookingNew = Backbone.View.extend({
  template: JST['booking/new'],

  render: function (){
    // var renderedContent = this.template({ booking: this.model, bookedDates: bookedDates });
    //TA: you are passing these variables into the template but not actually using them

    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.initDateTimePicker();
    return this;
  },

  getBookedDates: function(){
    var dateRanges = this.collection.map(function (booking) {
        var start = moment(booking.get('check_in'), 'YYYY-MM-DD');
        var end = moment(booking.get('check_out'), 'YYYY-MM-DD');
        return moment().range(start, end);
    });
    var start = moment('2014-01-01', 'YYYY-MM-DD');
    var end = moment();

    dateRanges.push(moment().range(start, end));
    var bookedDates = [];
    _.each(dateRanges, function (range){
      range.by('days', function (moment){
        bookedDates.push(moment.format('YYYY-MM-DD'));
      });
    });
    return bookedDates;
  },

  initDateTimePicker: function(){
    this.$('.booking-form-input').datetimepicker({
      minDate: '1/1/2014',
      pickTime: false,
      format: 'YYYY/MM/DD',
      disabledDates: this.getBookedDates()
    });
  }
});
