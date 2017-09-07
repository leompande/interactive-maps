import {ApplicationState} from '../application-state';
import  * as _ from 'lodash';
export function currentFavoriteSelector(state: ApplicationState) {
  const favourites = state.storeData.mapFavourites;
  const currentFavouriteId = state.uiState.currentFavourite.id;
  if ( favourites.length === 0 ) {
    return null;
  }

  return _.find(favourites, ['id', currentFavouriteId]);
}


