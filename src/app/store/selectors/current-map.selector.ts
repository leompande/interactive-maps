import {ApplicationState} from '../application-state';
export function currentMapSelector(state: ApplicationState) {
  return state.uiState.currentMap;
}
