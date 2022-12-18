Vue.component( 'playlist-selection', {
  props: [ 'soundtrack' ],
  template:
    '<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto"><i class="bi bi-heart mr-4"></i><img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ soundtrack.name }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>'
}
);

//Vue instance
let vm = new Vue( {
  // el: '#pills-tabContent2',
  el: '#pills-tabContent2',

  data: {
    soundtracks: [
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
      {
        img: '/images/weather-2.jpg',
        alt: 'Weather image of clouds',
        name: 'soundtrack_name',
        type: 'Weather',
      },
    ],
  },
} );