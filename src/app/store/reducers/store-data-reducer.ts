import * as _ from 'lodash';
import {INITIAL_STORE_DATA, StoreData} from '../store-data';
import {
  CURRENT_USER_LOADED_ACTION, LOAD_MAPS_FAVOURITE_ACTION, MAPS_FAVOURITE_LOADED_ACTION, SYSTEM_INFO_LOADED_ACTION
} from '../actions';

export function storeDataReducer(state: StoreData = INITIAL_STORE_DATA, action) {

  switch (action.type) {
    case SYSTEM_INFO_LOADED_ACTION: {
      const newState: StoreData = _.clone(state);
      newState.systemInfo = action.payload;
      return newState;
    }

    case MAPS_FAVOURITE_LOADED_ACTION: {
      const newState: StoreData = _.clone(state);
      console.log(action.payload);
      newState.mapFavourites = action.payload;
      return newState;
    }

    default:
      return state;
  }
}

