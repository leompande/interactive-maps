import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClientService} from './http-client.service';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class FavoriteService {
  private apiRootUrl: string;

  constructor(private http: HttpClientService) {
  }

  getMapFavourites(apiRootUrl: string): Observable<any> {
    return Observable.create(observer => {
      if (apiRootUrl && apiRootUrl !== '') {
        this.apiRootUrl = apiRootUrl;
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

  getMapForDisplay(favouriteUid: string): Observable<any> {
    return Observable.create(observer => {
      if (favouriteUid && this.apiRootUrl) {
        this.http.get(this.apiRootUrl + 'maps/' + favouriteUid + '.json?fields=id,user,displayName~rename(name),longitude,latitude,zoom,basemap,mapViews%5B*,columns%5Bdimension,filter,items%5BdimensionItem~rename(id),dimensionItemType,displayName~rename(name)%5D%5D,rows%5Bdimension,filter,items%5BdimensionItem~rename(id),dimensionItemType,displayName~rename(name)%5D%5D,filters%5Bdimension,filter,items%5BdimensionItem~rename(id),dimensionItemType,displayName~rename(name)%5D%5D,dataDimensionItems,program%5Bid,displayName~rename(name)%5D,programStage%5Bid,displayName~rename(name)%5D,legendSet%5Bid,displayName~rename(name)%5D,!lastUpdated,!href,!created,!publicAccess,!rewindRelativePeriods,!userOrganisationUnit,!userOrganisationUnitChildren,!userOrganisationUnitGrandChildren,!externalAccess,!access,!relativePeriods,!columnDimensions,!rowDimensions,!filterDimensions,!user,!organisationUnitGroups,!itemOrganisationUnitGroups,!userGroupAccesses,!indicators,!dataElements,!dataElementOperands,!dataElementGroups,!dataSets,!periods,!organisationUnitLevels,!organisationUnits,!sortOrder,!topLimit%5D').subscribe((currentFavourite: any) => {
          const newFavorite = _.clone(currentFavourite);
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
