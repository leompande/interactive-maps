import * as _ from 'lodash';
import {INITIAL_STORE_DATA, StoreData} from '../store-data';
import {
  SYSTEM_INFO_LOADED_ACTION, USER_FAVOURITES_LOADED_ACTION
} from '../actions';

export function storeDataReducer(state: StoreData = INITIAL_STORE_DATA, action) {
  switch (action.type) {

    case SYSTEM_INFO_LOADED_ACTION: {
      const newState: StoreData = _.clone(state);
      newState.systemInfo = action.payload;
      return newState;
    }

    case USER_FAVOURITES_LOADED_ACTION: {
      const newState: StoreData = _.clone(state);
      let mapFavourites = _.clone(newState.mapFavourites);
      mapFavourites = action.payload.maps;
      newState.mapFavourites = mapFavourites;
      return newState;
    }

    default:
      return state;
  }
}

