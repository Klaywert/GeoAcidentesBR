var URL_WMS =  "http://localhost:8080/geoserver/projeto_web/wms";

var WGS84_LATLONG = 'EPSG:4326';
var WGS84_UTM = 'EPSG:3857';

var mousePos = document.getElementById('mouse-position');
mousePos.style.position = "absolute";
mousePos.style.left = ((document.getElementById('map').clientWidth/2) - 40) + "px";
mousePos.style.top = "0px";
mousePos.style.fontWeight = "bold";
mousePos.style.fontSize = "14px";

/*Variavel que trata a exibicao das coordenadas do mouse*/
var mousePositionControl = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(4),
  projection: WGS84_LATLONG,
  className: 'custom-mouse-position',
  target: mousePos,
  undefinedHTML: '&nbsp;'
});

//Ajustando a escala
var scale = document.getElementById('scale-line');
scale.style.position = "absolute";
scale.style.left = (document.getElementById('map').clientWidth/2 - 50) + "px";
var scaleLineControl = new ol.control.ScaleLine({target: scale});

//Camada de acidentes de automóveis
var acidentes_automovel = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:Acidentes_automovel', 
					STYLES: ''
					},
			}),
			visible:true}
);

var acidentes_caminhao = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:Acidentes_caminhao', 
					STYLES: ''
					},
			}),
			visible:true}
);

var acidentes_motocicletas = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:Acidentes_motocicletas', 
					STYLES: ''
					},
			}),
			visible:true}
);

var acidentes_onibus = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:Acidentes_onibus', 
					STYLES: ''
					},
			}),
			visible:true}
);

var municipios_rj = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:RJ_Municipios_2020', 
					STYLES: ''
					},
			}),
			visible:true}
);

var mesorregioes_rj = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:RJ_Mesorregioes_2020', 
					STYLES: ''
					},
			}),
			visible:true}
);

var rodovias = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'projeto_web:rodovias_rj', 
					STYLES: ''
					},
			}),
			visible:true}
);

var rios = new ol.layer.Image(
		{source: new ol.source.ImageWMS({
			url: URL_WMS,
			params:{
				LAYERS: 'projeto_web:Principais Rios - RJ',
				STYLES: ''
			},
		}),
		visible:true}
);

/*Criando o mapa*/
var map = new ol.Map({
    target: 'map',
    layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }), 
		  acidentes_automovel, acidentes_caminhao, acidentes_motocicletas,
		  acidentes_onibus, municipios_rj, mesorregioes_rj, rodovias, rios
        ],
    view: new ol.View({
          center: [-44.2314, -22.2342],
          zoom: 3
        }),
	controls: ol.control.defaults({
		attributionOptions: ({
		  collapsible: false
		})
	  }).extend([mousePositionControl, scaleLineControl]),
});


/**
 * Create an overlay to anchor the popup to the map.
 */

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

map.addOverlay(overlay);

map.on('singleclick', function (evt) {
  var coordinate = evt.coordinate;
  var hdms = ol.coordinate.toStringHDMS()
  content.innerHTML = '<p>Acidente número:  Causa:  Horário e data:</p><code>' + hdms + '</code>';
  overlay.setPosition(coordinate);
});

function activeLayer(camada, ck) {
	var olCamada;
	if(camada == 'acidentes_automovel') {
		olCamada = acidentes_automovel;
	} else if (camada == 'acidentes_caminhao') {
		olCamada = acidentes_caminhao;
	} else if (camada == 'acidentes_motocicletas') {
		olCamada = acidentes_motocicletas;
	} else if (camada == 'acidentes_onibus') {
		olCamada = acidentes_onibus;
	} else if (camada == 'municipios_rj') {
		olCamada = municipios_rj;
	} else if (camada == 'mesorregioes_rj') {
		olCamada = mesorregioes_rj
	} else if (camada == 'rodovias') {
		olCamada = rodovias;
	} else if (camada == 'rios') {
		olCamada = rios;
	}
	olCamada.setVisible(ck);
}
