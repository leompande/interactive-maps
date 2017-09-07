import {Injectable} from '@angular/core';
import {MapView} from '../model/map-object';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapService {
  private mapObject: any;

  constructor() {
  }

  updateCurrentMap(payload): Observable<MapView> {
    this.mapObject = this._updateMapZoom(payload);
    return Observable.of(new Object()).map(this.mapObject);
  }

  private _updateMapZoom(payload: object): any {
    return {center: [], zoom: 6, layers: []};
  }

}
