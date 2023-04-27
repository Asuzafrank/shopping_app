<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: "Maps",
  mounted: function () {
    console.log("map: ", google.maps);
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -1.8487, lng: 36.7872 },
      scrollwheel: false,
      zoom: 9,
    });
  },
};
</script>
<style scoped>
#map {
  height: 300px;
  width: 100%;
}
</style>