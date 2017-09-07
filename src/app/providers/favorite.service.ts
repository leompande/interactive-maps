import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClientService} from './http-client.service';
import 'rxjs/add/observable/forkJoin';
import {MapView} from '../model/map-object';

@Injectable()
export class FavoriteService {
  private apiRootUrl: string;

  constructor(private http: HttpClientService) {
  }

  loadUserFavourites(apiObject): Observable<any> {
    return Observable.create(observer => {
      if (apiObject.apiUrl && apiObject.apiUrl !== '') {
        this.apiRootUrl = apiObject.apiUrl;
        this.http.get(this.apiRootUrl + 'maps.json?fields=id,name,displayName,access,user&paging=false').subscribe((mapFavorites: any) => {
          const newFavorite = _.clone(mapFavorites);
          // todo to place period sanitizer
          observer.next(newFavorite);
          observer.complete();
        }, error => {
          observer.next('');
          observer.complete();
        });
      }

    });
  }

  loadSelectedMapFavourite(favouriteInformationObject: any): Observable<any> {
    return Observable.create(observer => {
      if (favouriteInformationObject.apiUrl && favouriteInformationObject.apiUrl !== '') {
        this.apiRootUrl = favouriteInformationObject.apiUrl;
        this.http.get(this.apiRootUrl + 'maps/' + favouriteInformationObject.favouriteId + '.json?fields=*,mapViews[*,legendSet[*]]').subscribe((mapFavorites: any) => {
          const newFavorite = _.clone(this._prepareMapFavouriteViewModel(mapFavorites));
          // todo to place period sanitizer
          observer.next(newFavorite);
          observer.complete();
        }, error => {
          observer.next('');
          observer.complete();
        });
      }

    });
  }


  refineLoadedMapFavourites(mapFavourites: any): any {
    return mapFavourites;
  }

  private _prepareMapFavouriteViewModel(mapFavourite): MapView {
    let mapViewModel = {} as MapView;
    const longitude = (mapFavourite.longitude + '').indexOf('.') > 4 ? mapFavourite.longitude / 100000 : mapFavourite.longitude;
    const latitude = (mapFavourite.latitude + '').indexOf('.') > 4 ? mapFavourite.latitude / 100000 : mapFavourite.latitude;
    mapViewModel = {
      center: [latitude, longitude], layers: [
        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ], zoom: mapFavourite.zoom
    };
    return mapViewModel;
  }


}
