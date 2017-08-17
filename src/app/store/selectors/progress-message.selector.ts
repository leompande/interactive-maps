import {ApplicationState} from '../application-state';
import * as _ from 'lodash';
export function progressMessagesSelector(state: ApplicationState) {


}

function calculateProgress(loaded, total) {
  return total === 0 ? 0 : ((loaded / total) * 100).toFixed(0);
}
