HeirBnb.Views.UserShow = Backbone.CompositeView.extend({
  template :  JST['user/show'],
  classname: 'col-xs-12 container-full user-show-container',

  events: {
    'click .edit-profile-button' : 'showModal',
    'submit form' : 'updateProfile'
  },

  initialize : function (){
    this.listenTo(this.model, 'sync', this.render);
  },

  addReview: function (review){
    var reviewShow = new HeirBnb.Views.ReviewShow({ model: review });
    this.addSubview('.user-reviews-box', reviewShow);
  },

  showModal: function (event){
    this.$('#editModal').modal('show');
  },

  updateProfile: function (event) {
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()['user'];
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
        this.$('#editModal').css("visibility", "hidden");
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
      }
    });
  },

  handle_files : function(files, params) {
    var file = files[0];
    var reader = new FileReader();
    var that = this;
    //event
    reader.onload = function(e) {
      params.avatar = this.result;
      params.filename = file.name;
      that.saveModel(params)
    }
    reader.readAsDataURL(file);
  },


  render : function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.reviews().each(function(review){
      that.addReview(review);
    });

    var editModal = new HeirBnb.Views.UserEdit({ model: this.model });
    this.$el.append(editModal.render().$el);
    return this;
  }
});
