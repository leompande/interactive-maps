import * as L from 'leaflet';
import Layer = L.Layer;
import {Injectable} from "@angular/core";
/**
 * Created by mpande on 9/7/17.
 */

@Injectable()
export class BaseMaps {
  private _OSMLIGHT = {
    url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  };
  private _GoogleStreet = {};
  private _GoogleHybreed = {};
  private _OpenStreetMap = {};
  private _ExternalLayer = {};
  private _GoogleEarthEngine = {};

  constructor() {
  }

  get OSMLIGHT(): any {
    return L.tileLayer(this._OSMLIGHT.url, {
      attribution: this._OSMLIGHT.attribution
    });
  }

  set OSMLIGHT(value: any) {
    this._OSMLIGHT = value;
  }

  get GoogleStreet(): {} {
    return this._GoogleStreet;
  }

  set GoogleStreet(value: {}) {
    this._GoogleStreet = value;
  }

  get GoogleHybreed(): {} {
    return this._GoogleHybreed;
  }

  set GoogleHybreed(value: {}) {
    this._GoogleHybreed = value;
  }

  get OpenStreetMap(): {} {
    return this._OpenStreetMap;
  }

  set OpenStreetMap(value: {}) {
    this._OpenStreetMap = value;
  }

  get ExternalLayer(): {} {
    return this._ExternalLayer;
  }

  set ExternalLayer(value: {}) {
    this._ExternalLayer = value;
  }

  get GoogleEarthEngine(): {} {
    return this._GoogleEarthEngine;
  }

  set GoogleEarthEngine(value: {}) {
    this._GoogleEarthEngine = value;
  }

}
