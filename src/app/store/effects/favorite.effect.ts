import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  CurrentFavouriteSelectedFromUrlLoadedAction,
  ErrorOccurredAction, LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION, LOAD_USER_FAVOURITES_ACTION,
  UserFavouritesLoadedAction
} from '../actions';
import {Action, Store} from '@ngrx/store';
import {ApplicationState} from '../application-state';
import 'rxjs/add/operator/mergeMap';
import {FavoriteService} from '../../providers/favorite.service';
@Injectable()
export class FavoriteEffect {
  constructor(private actions$: Actions,
              private store$: Store<ApplicationState>,
              private favoriteService: FavoriteService) {
  }


  @Effect() allUserFavourites: Observable<Action> = this.actions$
    .ofType(LOAD_USER_FAVOURITES_ACTION)
    .switchMap((action) => this.favoriteService.loadUserFavourites(action.payload))
    .map((userfavourites) => new UserFavouritesLoadedAction(userfavourites))
    .catch(() => Observable.of(new ErrorOccurredAction('Problem occurred during initializing application')));


  @Effect() currentMapfavourite: Observable<Action> = this.actions$
    .ofType(LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION)
    .switchMap((action) => this.favoriteService.loadSelectedMapFavourite(action.payload))
    .map((currentSelectedFavourite) => new CurrentFavouriteSelectedFromUrlLoadedAction(currentSelectedFavourite))
    .catch(() => Observable.of(new ErrorOccurredAction('Problem occurred during initializing application')));

}
