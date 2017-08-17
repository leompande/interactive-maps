import * as _ from 'lodash';
import {INITIAL_UI_STATE, UiState} from '../ui-state';
import {
  MAPS_FAVOURITE_LOADED_ACTION,
  SYSTEM_INFO_LOADED_ACTION
} from '../actions';
export function uiStateReducer(state: UiState = INITIAL_UI_STATE, action) {
  switch (action.type) {

    case SYSTEM_INFO_LOADED_ACTION: {
      const newState: UiState = _.clone(state);
      const newSystemInfo = _.clone(newState.systemInfo);
      newSystemInfo.rootUrl = action.payload.rootUrl;
      newSystemInfo.apiRootUrl = action.payload.apiRootUrl;
      newSystemInfo.currentVersion = action.payload.currentVersion;
      newSystemInfo.loaded = true;
      newState.systemInfo = newSystemInfo;
      return newState;
    }

    default:
      return state;
  }
}
