import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClientService} from './http-client.service';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class FavoriteService {

  constructor(private http: HttpClientService) {
  }

  getMapFavourites(apiRootUrl: string): Observable<any> {

    return Observable.create(observer => {
      if (apiRootUrl && apiRootUrl !== '') {
        this.http.get(apiRootUrl + 'maps.json?fields=id,displayName~rename(name),access').subscribe((mapFavorites: any) => {
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

}
