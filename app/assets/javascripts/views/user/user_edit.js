HeirBnb.Views.UserEdit = Backbone.View.extend({
  template: JST['user/edit'],
  className: 'modal fade',
  id: 'editModal',

  events: {
    'submit form' : 'updateProfile'
  },

  updateProfile: function (event) {
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['user'];
    this.handle_files(document.getElementById("images").files, params);
  },

  handle_files : function(files, params) {
    var file = files[0];
    var reader = new FileReader();
    var that = this;
    //event
    reader.onload = function(e) {
      params.avatar = this.result;
      params.filename = file.name;
      that.model.set(params)

      that.model.save({
        success: function () {
          this.$('#myModalLabel').model('hide');
        }
      });
    }
    reader.readAsDataURL(file);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
