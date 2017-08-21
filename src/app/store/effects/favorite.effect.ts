import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  ErrorOccurredAction, LOAD_MAP_SINGLE_FAVOURITE_FOR_DISPLAY_ACTION,
  LOAD_MAPS_FAVOURITE_ACTION,
  MapsFavouritesLoadedAction, MapSingleFavouriteForDisplayLoadedAction
} from '../actions';
import {Action, Store} from '@ngrx/store';
import {ApplicationState} from '../application-state';
import 'rxjs/add/operator/mergeMap';
import {FavoriteService} from '../../providers/favorite.service';
@Injectable()
export class FavoriteEffect {
  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private favoriteService: FavoriteService
  ) {}

  @Effect() allFavourites$: Observable<Action> = this.actions$
    .ofType(LOAD_MAPS_FAVOURITE_ACTION)
    .switchMap((action: any) => this.favoriteService.getMapFavourites(action.payload))
    .map((allFavourites) => new MapsFavouritesLoadedAction(allFavourites.maps))
    .catch((error) => Observable.of(new ErrorOccurredAction(error)));


  @Effect() favouriteMap$: Observable<Action> = this.actions$
    .ofType(LOAD_MAP_SINGLE_FAVOURITE_FOR_DISPLAY_ACTION)
    .switchMap((action: any) => this.favoriteService.getMapForDisplay(action.payload))
    .map((favouriteMap) => new MapSingleFavouriteForDisplayLoadedAction(favouriteMap))
    .catch((error) => Observable.of(new ErrorOccurredAction(error)));
}
