import * as _ from 'lodash';
import {INITIAL_UI_STATE, UiState} from '../ui-state';
import {
  ANALYTICS_LOADED_ACTION,
  CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION, ERROR_OCCURRED_ACTION, SYSTEM_INFO_LOADED_ACTION,
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
    case CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION: {
      const newState: UiState = _.clone(state);
      const currentMap = _.clone(newState.currentMap);
      currentMap.zoom = action.payload.zoom;
      currentMap.center = action.payload.center;
      currentMap.layers = action.payload.layers;
      newState.currentMap = currentMap;
      return newState;
    }

    case ANALYTICS_LOADED_ACTION: {
      const newState: UiState = _.clone(state);
      return newState;
    }

    case ERROR_OCCURRED_ACTION: {
      console.log(action.payload);
    }

    default:
      return state;
  }
}
