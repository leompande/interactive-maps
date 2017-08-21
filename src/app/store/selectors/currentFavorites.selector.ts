import {ApplicationState} from '../application-state';
export function currentFavoriteSelector(state: ApplicationState) {
  return state.storeData.currentFavourite;
}
