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
    var newSpace = new HeirBnb.Models.Space();
    newSpace.save(params, {
      success: function () {
        HeirBnb.spaces.add(newSpace);
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }


});
