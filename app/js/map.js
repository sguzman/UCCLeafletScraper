/**
 * Created by salvadorguzman on 1/30/17.
 */

let tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

let map = L.map('map', {layers: [tiles]}).setView([34.430033, -119.868154], 12);