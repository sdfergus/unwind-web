Vue.component( 'playlist-selection', {
  props: [ 'soundtrack' ],
  template:
    // '<div class="soundtrack-row"><img :src="soundtrack.img"><h3>{{ soundtrack.name }}</h3><p>{{ soundtrack.type }}</p><button>Add to Cart</button></div>',

    '<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>'
} );

//Vue instance
let vm = new Vue( {
  el: '#vue',

  data: {
    soundtracks: [
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Pasta',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Red Crab',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Breakfast Special',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Sea Shells Mix',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Ultimate Kebab',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Chicken Steak',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Filet Mignon',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Bistro Brunch',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'California Crepe',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Top Burger',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Chicken Garlic Pizza',
        type: 'Weather',
      },
      {
        img: '/public/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'Wok away healthy',
        type: 'Weather',
      },
    ],
  },
} );