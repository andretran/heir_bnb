HeirBnb.Views.SpacesIndex = Backbone.View.extend({
  template: JST['space/index'],
  className: 'container-full space-index-view',


  initialize: function () {
    this.listenTo(this.collection, 'add sync', this.render);
  },

  initializeMap: function ($mapCanvas) {
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(-34.397, -80),
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ["westeros"]
      }
    };

    this.map = new google.maps.Map($mapCanvas.get(0),mapOptions);
    var that = this
    var westerosOptions = {
      getTileUrl: function(coord, zoom) {
          var normalizedCoord = that.getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          // var bound = Math.pow(2, zoom);
          return "assets/westeros_map_tiles" +
                  "/" + zoom + "/" + normalizedCoord.x + "/" +
                  normalizedCoord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      maxZoom: 5,
      minZoom: 2,
      radius: 1738000,
      name: "Westeros"
    };

    var westerosMapType = new google.maps.ImageMapType(westerosOptions);
    this.map.mapTypes.set('westeros', westerosMapType);
    this.map.setMapTypeId('westeros');


    HeirBnb.spaces.each (function (space){
      var space_coord = new google.maps.LatLng(space.get('latitude'), space.get('longitude'));
      that.placeMarker(space_coord, space);
    });
    // google.maps.event.addListener(this.map, 'click', function(event) {
    //    that.placeMarker(event.latLng);
    //    console.log(event.latLng);
    // });

  },

  placeMarker: function(location, space){
    var marker = new google.maps.Marker({
        position: location,
        map: this.map,
        animation: google.maps.Animation.DROP
    });

    var contentString = '<div> <img class="img-thumbnail" src=' + space.escape('photo_url') + '>' +
                        space.escape('title') + '</div>'
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });


    google.maps.event.addListener(marker, 'click', function (){
      infowindow.open(this.map,marker);
    });
  },

  getNormalizedCoord: function (coord, zoom) {
    var y = coord.y;
    var x = coord.x;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = [[1,1], [2,2], [3,4], [5,8],[10,15], [20,30]];
    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange[zoom][1]) {
      return null;
    }

    // repeat across x-axis
    if (x < 0 || x >= tileRange[zoom][0]) {
      return null;
    }
    return {
      x: x,
      y: y
    };
  },

  onRender: function() {
    var $mapCanvas = this.$('#map-canvas');
    var $container = $mapCanvas.parent();
    $mapCanvas.css({
      height: ($container.height()) + 'px',
      width: $container.width() + 'px'
    });
    this.initializeMap($mapCanvas);
  },

  render: function () {
    this.$el.empty();
    var renderedContent = this.template({ spaces: this.collection });
    this.$el.append(renderedContent);
    return this;
  }
});
