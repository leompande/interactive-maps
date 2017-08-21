import {ApplicationState} from '../application-state';
export function systemInfoSelector(state: ApplicationState) {
  return state.storeData.systemInfo;
}
