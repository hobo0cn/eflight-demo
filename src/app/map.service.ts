// import "../custom-typings.d";
import 'leaflet'
import 'leaflet-gcj02'
import 'leaflet-draw'
import 'rxjs/add/operator/map'
import "./typings/leaflet-gcj02.d"

import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
// import { Location } from "../core/location.class";
import { Map } from "leaflet"
// import * as _ from  'leaflet-gcj02/lib/transform.js';

@Injectable()
export class MapService {
    public map: Map;
    public baseMaps: any;
    private vtLayer: any;
    public featureClickFunction: any;
    private marker: any;
    private polyline: any;
    private polygon: any;
    public polygonArea: number = 0; // 测量的面积
    public  drawGeojson: string = '';
    constructor(private http: Http) {
        // this.featureClickFunction = featureClickFunction;
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
    loadResultLayer(layerName: string): void {
      let wmsLayer = L.tileLayer.wms('http://112.74.189.43:8080/geoserver/wsgeotiff/wms?', {
        layers: layerName, //'wsgeotiff:48',
        format: 'image/png',
        transparent: true,
        crs: L.CRS.GCJ02,
        maxZoom: 30
      }).addTo(this.map);
    }
    loadGeoJsonLayer(geojsonStr: string, functionFeatureClick: any): void {
        this.featureClickFunction = functionFeatureClick;
        let geoJsonLayer =  L.geoJSON(JSON.parse(geojsonStr), {
          onEachFeature: this.onEachFeature.bind(this)
        });

        geoJsonLayer.addTo(this.map);
    }
    // loadGeoJson(): void {
    //    this.http.get("../assets/geojson/guang_xi_geo.json")
    //           .map((res:any) => {
    //             L.geoJSON(res.json()).addTo(this.map);
    //           })
    //           .catch((error:any) => console.log(error));
    //
    // }

    disableMouseEvent(elementId: string) {
        let element = <HTMLElement>document.getElementById(elementId);

        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    }



     onEachFeature(feature: any, layer: any) {
        layer.on({
            // mouseover: highlightFeature,
            // mouseout: resetHighlight,
            click: this.featureClickFunction.bind(this)
        });
    }

    toggleSelectLayer(functionFeatureClick: any) {
      this.featureClickFunction = functionFeatureClick;
      if (this.vtLayer) {
          this.map.removeLayer(this.vtLayer);
          delete this.vtLayer;
      } else {
          this.http.get("../assets/geojson/service.json")
              .map(res => res.json())
              .subscribe(result => {
                  this.vtLayer =  L.geoJSON(result, {
                    onEachFeature: this.onEachFeature.bind(this)
                  });
                  this.vtLayer.addTo(this.map);
              });
      }
    }

    loadDrawCtrl(): any {
      let drawnItems = new L.FeatureGroup(this.vtLayer);
      this.map.addLayer(drawnItems);

      let drawControl = new L.Control.Draw({
                draw: {
                  polyline: true,
                  marker: false,
                  rectangle: true,
                  circle: false,
                  polygon: true
                },
                edit: {
                    featureGroup: drawnItems,
                    remove: true
                }
            });
        this.map.addControl(drawControl);

        this.map.on('draw:created',  (e: any) => {
                 console.log(e);
                 let type = e.layerType,
                     layer = e.layer;
                 let anno_cat = "";
                 let anno_geojson = "";
              if (type === 'marker') {
                //  this.marker.disable();
                 anno_cat = "Marker";
               }
               if (type === 'polyline') {
                //  this.polyline.disable();
                 anno_cat = "Polyline";
               }
                 if (type === 'polygon') {
                    // this.polygon.disable();
                    anno_cat = "Polygon";
              };

              anno_geojson = JSON.stringify(layer.toGeoJSON());
              //TODO 将geojson存储在task中
              this.drawGeojson = anno_geojson;
              console.log(this.drawGeojson);
        });
    }

    // _showFeaturePanel(targetFeature: any): number{
    //         let panelType = 0;
    //         if (targetFeature instanceof L.Polygon) {
    //             panelType = 3;
    //            //获取面积数值
    //            let latlngs = targetFeature._defaultShape ? targetFeature._defaultShape() : targetFeature.getLatLngs(),
    //                 area = L.GeometryUtil.geodesicArea(latlngs);
    //             this.polygonArea =  L.GeometryUtil.readableArea(area, true);
    //         }
    //         else if (targetFeature instanceof L.Polyline) {
    //             panelType = 2;
    //             //获取线长度
    //             var latlngs = targetFeature._defaultShape ? targetFeature._defaultShape() : targetFeature.getLatLngs(),
    //                 distance = 0;
    //             if (latlngs.length < 2) {
    //                 scope.polylineLen = "N/A";
    //             } else {
    //                 for (var i = 0; i < latlngs.length-1; i++) {
    //                     distance += latlngs[i].distanceTo(latlngs[i+1]);
    //                 }
    //                 scope.polylineLen = _round(distance, 2)+" 米";
    //             }
    //         }
    //         else if (targetFeature instanceof L.Marker) {
    //             panelType = 1;
    //            //获取位置点经纬度
    //            scope.markerPos = strLatLng(targetFeature.getLatLng());
    //
    //         }
    //         // console.log(panelType);
    //         return panelType;
    //   }
}
