<template lang="pug">
  .google-map
    gmap-map(
      :center="center"
      :zoom="zoom"
      :options="mapStyle"
      style="width:100%; height:100vh;"
    )
      gmap-marker(
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :optimized="false"
        :icon="icon + index"
        @click="checkCondition(m)"
      )
</template>

<script>
import { SHOW_PANEL, SEARCH_LOCATION_CONDITION } from '@/store/mutation-types/sideQuest-types.js';

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 25.0457554, lng: 121.5376168 },
      zoom: 12.3,
      icon: 'https://i.imgur.com/jsVfc1G.png?key=',
      markers: [
        {
          full_name: '中正區',
          position: {
            lat: 25.0448641,
            lng: 121.5201811,
          },
        },
        {
          full_name: '大同區',
          position: {
            lat: 25.0663566,
            lng: 121.512603,
          },
        },
        {
          full_name: '中山區',
          position: {
            lat: 25.0812829,
            lng: 121.5444203,
          },
        },
        {
          full_name: '松山區',
          position: {
            lat: 25.0575549,
            lng: 121.5643144,
          },
        },
        {
          full_name: '大安區',
          position: {
            lat: 25.0319032,
            lng: 121.5446271,
          },
        },
        {
          full_name: '萬華區',
          position: {
            lat: 25.0306607,
            lng: 121.4979334,
          },
        },
        {
          full_name: '信義區',
          position: {
            lat: 25.0315975,
            lng: 121.577837,
          },
        },
        {
          full_name: '士林區',
          position: {
            lat: 25.0970682,
            lng: 121.5247725,
          },
        },
        {
          full_name: '北投區',
          position: {
            lat: 25.1185545,
            lng: 121.5149431,
          },
        },
        {
          full_name: '內湖區',
          position: {
            lat: 25.0715898,
            lng: 121.5917417,
          },
        },
        {
          full_name: '南港區',
          position: {
            lat: 25.0336047,
            lng: 121.6110152,
          },
        },
        {
          full_name: '文山區',
          position: {
            lat: 25.0000032,
            lng: 121.568432,
          },
        },
      ],
      places: [],
      currentPlace: null,
      mapStyle: {
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: "2.00"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9c9c9c"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 45
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#7b7b7b"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#46bcec"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#c8d7d4"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#070707"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          }
        ]
      }
    };
  },

  mounted() {
    this.geolocate();
  },
  methods: {
    checkCondition(m) {
      this.$store.commit(`sideQuest/${SEARCH_LOCATION_CONDITION}`, m.full_name);
      this.center = m.position;
      this.$store.commit(`sideQuest/${SHOW_PANEL}`);
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss">
@keyframes pulse {
  0% {
    background-color: rgba(#000000, 0);
  }
  50% {
    background-color: rgba(#000000, .7);
  }
  100% {
    background-color: rgba(#000000, 0);
  }
}
@mixin pulesSetting($sec) {
  animation: $sec ease-out 1s normal none infinite running pulse;
}
img[src^='https://i.imgur.com/jsVfc1G.png?key=']{
  position: relative;
  opacity: 0.5;
  border: 2px solid #222;
  border-radius: 50%;
  @include pulesSetting(2.5s);
}
</style>
