import {ApplicationState} from '../application-state';
export function favoritesSelector(state: ApplicationState) {
  return state.storeData.mapFavourites;
}
