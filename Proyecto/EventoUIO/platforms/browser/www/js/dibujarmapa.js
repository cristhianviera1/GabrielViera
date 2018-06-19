function buscar(){
    var nombrebusqueda = document.getElementById("inputBuscar");
    var casa = [-0.345958,-78.561351];     
    var vidaNueva = [-0.338690, -78.549710]
    var map = L.map('map').
    setView([casa[0],casa[1]],15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 20,
    minZoom: 10}).addTo(map);

    L.marker([casa[0],casa[1]]).addTo(map).bindPopup('Hogar Baticueva').openPopup();
    L.marker([vidaNueva[0],vidaNueva[1]]).addTo(map).bindPopup('Vida Nueva').openPopup();

    L.control.scale().addTo(map);
    L.marker([casa[0],casa[1]], {draggable: true}).addTo(map);
};
