<template>
  <div>
    <div id="map" ref="place"></div>

    <br />
    <button @click="addMarker">Add Marker</button>
    <button @click="deleteAllMarkers">Delete All Marker</button>
    <br /><br /><br />

    <button @click="deleteSpecificsMarkers('Academia 0')">Academia 0</button>
    <button @click="deleteSpecificsMarkers('Academia 1')">Academia 1</button>
    <button @click="deleteSpecificsMarkers('Academia 2')">Academia 2</button>
  </div>
</template>

<script>
import {
  addMarker,
  deleteAllMarkers,
  deleteSpecificsMarkers,
  init,
} from "@/services/gMapsService.js";

export default {
  name: "IndexPage",
  data() {
    return {
      apiKey: "AIzaSyBGo06XN4Y_0hmDJWQOiumKrUwH8ljSmIs",
    };
  },
  mounted() {
    if (typeof google === "undefined") {
      const script = document.createElement("script");
      script.async = true;
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
      document.head.appendChild(script);
    } else {
      this.onScriptLoaded();
    }
  },
  methods: {
    onScriptLoaded(event = null) {
      
       init(document.getElementById("map"), {
         center: { lat: 37.4419, lng: -122.1419 },
         zoom: 13,
       });
    },
    addMarker,
    deleteAllMarkers,
    deleteSpecificsMarkers,
  },
};
</script>


<style scoped>
#map {
  width: 80vw;
  height: 80vh;
}
</style>