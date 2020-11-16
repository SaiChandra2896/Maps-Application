mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpY2hhbmRyYTI4OTYiLCJhIjoiY2toZGJjdHZ1MDMzdTJzazl2bWpxcmtjaSJ9.DpT8pogXqAm76N-TWGHG1g";

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center,
    zoom: 15,
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions);
};

const successLocation = (position) => {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
};

const errorLocation = () => {
  setupMap([-2.24, 53.48]);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
