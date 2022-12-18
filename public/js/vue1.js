//Dynamic Component using 'Keep Alive'
new Vue( {
  el: '#catalog-vue',
  data: {
    currHeart: 'emptyHeart',
    currSection: 'catalog-sec',
    currCatalog: 'weather'
    // startingPage: ''
  },
  methods: {
    switchCatalogs: function ( catalog ) {
      this.currCatalog = catalog;
    },
    playAll: function ( catalog ) {
      //activate the play function to play playlist from soundtrack# 1
      console.log( `Play all from ${ catalog } was clicked!` );
    },
    shuffleAll: function () {
      //play soundtrack sounds at random
    },
    showAll: function ( catalog ) {
      var catalogArr = catalog;


      //Show all in array
    },
    showFavorites: function ( catalog ) {
      //filter out tracks and only display favorites
      if ( catalog === 'weather' ) {
        return catalog.weatherTracks.soundtracks.filter( soundtrack => {
          //filter heart that's not empty
        } )
      }
    }
  },
  components: {
    emptyHeart: {
      template: `<i class="bi bi-heart"></i>`
    },
    fullHeart: {
      template: `<i class="bi bi-heart-fill user-icon"></i>`
    },
    weather: {
      template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto">{{ currHeart }}<img :src="soundtracks.img" alt="soundtracks.alt"><span class="ml-4">{{ soundtracks.name }}</span></span><span class="mr-5">{{ soundtracks.type }}</span></a>`,
      data: {
        soundtracks: [
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          },
          {
            heart: this.currHeart,
            img: '/public/images/weather-2.jpg',
            alt: 'Weather image of clouds',
            name: 'soundtrack_name',
            type: 'Weather',
          }
        ]
      },
      playAll: {
        template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto">{{ currHeart }}<img :src="soundtracks.img" alt="soundtracks.alt"><span class="ml-4">{{ soundtracks.name }}</span></span><span class="mr-5">{{ soundtracks.type }}</span></a>`,
        // data: function () {
        //   return {
        //     weatherData: this.data
        //   }
        // }
        data: function () {
          return {
            playAll( currCatalog );
          }
        }
      },
      shuffleAll: {

      },
      favorites: {

      },
      methods: {
        switchHearts: function ( heart ) {
          this.currHeart = heart;
        }
      }
      // data: function () {
      //   return {
      //     weatherData: {
      //       soundtracks: [
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         },
      //         {
      //           img: '/public/images/weather-2.jpg',
      //           alt: 'Weather image of clouds',
      //           name: 'soundtrack_name',
      //           type: 'Weather',
      //         } ]
      //     }
      //   }
      // }
    },
    water: {
      template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>`,
      data: function () {
        return {
          waterData: {}
        }
      }
    },
    forest: {
      template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>`,
      data: function () {
        return {
          forestData: {}
        }
      }
    },
    fire: {
      template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>`,
      data: function () {
        return {
          fireData: {}
        }
      }
    },
    ambientSounds: {
      template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>`,
      data: function () {
        return {
          ambientSoundsData: {}
        }
      }
    },

  }
} )























// Vue.component( 'playlist-selection', {
//   props: [ 'soundtrack' ],
//   template:
//     // '<div class="soundtrack-row"><img :src="soundtrack.img"><h3>{{ soundtrack.name }}</h3><p>{{ soundtrack.type }}</p><button>Add to Cart</button></div>',

//     '<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>'
// } );

// //Vue instance
// let vm = new Vue( {
//   el: '#vue',

//   data: {
//     soundtracks: [
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//       {
//         img: '/public/images/weather-2.jpg',
//         alt: 'Weather image of clouds',
//         name: 'soundtrack_name',
//         type: 'Weather',
//       },
//     ],
//     data: {
//       emptyHeart: '<!-- <i class="bi bi-heart"></i> -->'
//     }
//   },
//   methods: {
//     switchTo: function () {

//     }
//   }
// } );