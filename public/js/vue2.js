new Vue( {
  el: '#myList',
  props: [ 'soundtrack' ],
  template: `<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-toggle="list" href="#home" role="tab"><span class="mr-auto">{{ currHeart }}<img :src="soundtrack.img" alt="soundtrack.alt"><span class="ml-4">{{ v-model:"soundtrack.name" }}</span></span><span class="mr-5">{{ soundtrack.type }}</span></a>`,
  components: {
    // emptyHeart: {
    //   template: `<i class="bi bi-heart"></i>`
    // },
    // fullHeart: {
    //   template: `<i class="bi bi-heart-fill user-icon"></i>`
    // },
  },
  data: {
    currentTab: 'playAll',
    currHeart: 'emptyHeart',
    // like: '',
    // unlike: '',
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
  methods: {
    switchTab: function ( tab ) {
      this.currentTab = tab;
    }
  },
  components: {
    emptyHeart: {
      template: `<i class="bi bi-heart"></i>`
    },
    fullHeart: {
      template: `<i class="bi bi-heart-fill user-icon"></i>`
    },
    playAll: {
      // template: `<div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab2"><!-- List group --><div class="list-group list-group-flush list-group-sounds" id="myList" role="tablist"><div id="vue"><playlist-selection v-for="soundtract in soundtracks" v-bind:soundtrack="soundtract"></playlist-selection></div></div></div>`,
      // template: `v-for="soundtract in soundtracks" v-bind:soundtrack="soundtract"`,
      data: function () {
        return {
          allTracks: { soundtracks: 'soundtracks' }
        }
      }
    }
  }

} )