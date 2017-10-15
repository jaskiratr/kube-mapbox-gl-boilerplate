mapboxgl.accessToken = 'pk.eyJ1IjoidGltb25tIiwiYSI6ImNpeGdsM3J3czAwMmMyb3BxNDhpOWY2cDMifQ.fGcwulOfy5N9AtD05ehH_A'
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
	center: [-74.50, 40], // starting position [lng, lat]
	zoom: 9 // starting zoom
})