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
    return this;
  },

  submit : function(event){
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['space'];
    this.handle_files(document.getElementById("images").files, params);

  },

  handle_files : function(files, params) {
  var file = files[0];
  var reader = new FileReader();
  var that = this;
  //event
  reader.onload = function(e) {
    params.photo_preview = this.result;
    params.filename = file.name;
    that.model.save(params, {
      success: function () {
        HeirBnb.spaces.add(that.model);
        Backbone.history.navigate("", { trigger: true });
      }
    });
    // you need to send e.target.result in your $.ajax request
  }
  reader.readAsDataURL(file);
  }


});
