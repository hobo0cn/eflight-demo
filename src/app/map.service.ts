import "../custom-typings.d"
import 'leaflet';

import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
// import { Location } from "../core/location.class";
import { Map } from "leaflet";
import "./typings/leaflet-gcj02.d";

@Injectable()
export class MapService {
    public map: Map;
    public baseMaps: any;
    private vtLayer: any;

    constructor(private http: Http) {
        this.baseMaps = {
            AeroMap: L.tileLayer("http://map.yiyuntu.cn:9009/arctiler/arcgis/services/GoogleChinaHybridMap/MapServer/tile/{z}/{y}/{x}", {

            }),
            Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            }),
            CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };


    }

    // 添加结果图层
    loadResultLayer(): void {
      let wmsLayer = L.tileLayer.wms('http://112.74.189.43:8080/geoserver/wsgeotiff/wms?', {
        layers: 'wsgeotiff:48',
        format: 'image/png',
        transparent: true,
        crs: L.CRS.GCJ02,
        maxZoom: 30
      }).addTo(this.map);
    }

    loadGeoJson(): void {
       this.http.get("../assets/geojson/guang_xi_geo.json")
              .map((res:any) => {
                L.geoJSON(res.json()).addTo(this.map);
              })
              .catch((error:any) => console.log(error));

    }

    disableMouseEvent(elementId: string) {
        let element = <HTMLElement>document.getElementById(elementId);

        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    }

    // toggleAirPortLayer() {
    //   if (this.vtLayer) {
    //       this.map.removeLayer(this.vtLayer);
    //       delete this.vtLayer;
    //   } else {
    //       this.http.get("data/airports.geojson")
    //           .map(res => res.json())
    //           .subscribe(result => {
    //               this.vtLayer = L.vectorGrid.slicer(result);
    //               this.vtLayer.addTo(this.map);
    //           });
    //   }
    // }
}
