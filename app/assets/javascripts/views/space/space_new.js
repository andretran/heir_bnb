HeirBnb.Views.SpaceNew = Backbone.View.extend({
  template: JST['space/new'],

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
  //event
  reader.onload = function(e) {
    var newSpace = new HeirBnb.Models.Space();
    params.photo_preview = this.result;
    params.filename = file.name;
    newSpace.save(params, {
      success: function () {
        HeirBnb.spaces.add(newSpace);
        Backbone.history.navigate("", { trigger: true });
      }
    });
    // you need to send e.target.result in your $.ajax request
  }
  reader.readAsDataURL(file);
}


});
