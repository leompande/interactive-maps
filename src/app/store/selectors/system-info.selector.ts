import {ApplicationState} from '../application-state';
export function systemInfoSelector(state: ApplicationState) {
  console.log(state.storeData)
  return state.storeData.systemInfo;
}
