HeirBnb.Views.SpaceNew = Backbone.View.extend({
  template: JST['space/new'],
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit form' : 'submit'
  },

  render: function () {
    var renderedContent = this.template({ space: this.model });
    this.$el.html(renderedContent);
    this.applyValidators;
    return this;
  },

  submit : function(event){
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['space'];
    if (document.getElementById("images").files.length > 0){
      this.handle_files(document.getElementById("images").files, params);
    } else{
      this.saveModel(params);
    }

  },

  saveModel : function (params){
    var that = this;
    this.model.save(params, {
      success: function () {
        HeirBnb.spaces.add(that.model);
        Backbone.history.navigate("spaces/" + that.model.id , { trigger: true });
      },
      error: function (model, resp){
        $('.form-errors').empty();
        _.each(resp.responseJSON.reverse(), function(error){
          $('.form-errors').prepend(
            "<div class='alert alert-danger'>" +
            error + "</div>"
          );
        });
      }
    });
  },

  handle_files : function(files, params) {
  var file = files[0];
  var reader = new FileReader();
  var that = this;
  //event
  reader.onload = function(e) {
    params.photo_preview = this.result;
    params.filename = file.name;
    that.saveModel(params);
    // you need to send e.target.result in your $.ajax request
  }
  reader.readAsDataURL(file);
  }


});
