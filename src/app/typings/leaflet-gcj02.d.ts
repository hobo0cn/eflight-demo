import "@types/leaflet";
// import 'leaflet-gcj02/lib/transform.js'

declare namespace L {
    export abstract class CRS {}
    export class GCJ02 extends CRS {}
    export namespace CRS {
        // export class GCJ02 extends CRS {
        //   latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
        //   pointToLatLng(point: PointExpression, zoom: number): LatLng;
        //   code: string;
        //   projection: any;
        //   transformation: any;
        // }
        export const GCJ02: CRS;
      //   export namespace CRS {
      //     export const GCJ02: CRS;
      // }

    }
}

// declare function gcj2wgs(gcjLat: number, gcjLng: number): any;
// declare function wgs2gcj(wgsLat: number, wgsLng: number): any;
