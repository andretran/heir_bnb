HeirBnb.Models.Review = Backbone.Model.extend({
    urlRoot: 'api/reviews',

    parse: function (payload) {
      if (payload.author){
        this.set('author_id', payload.author.id, {parse: true});
        this.set('author_avatar', payload.author.author_avatar, {parse: true});
        delete payload.author;
      }

      return payload;
    }
});
