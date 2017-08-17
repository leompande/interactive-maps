import {Action} from '@ngrx/store';
import {CurrentUser} from '../model/current-user';
import {SystemInfo} from '../providers/system-info.service';
export const LOAD_SYSTEM_INFO_ACTION = 'LOAD_SYSTEM_INFO_ACTION';
export const LOAD_MAPS_FAVOURITE_ACTION = 'LOAD_MAPS_FAVOURITE_ACTION';
export const MAPS_FAVOURITE_LOADED_ACTION = 'MAPS_FAVOURITE_LOADED_ACTION';
export const SYSTEM_INFO_LOADED_ACTION = 'SYSTEM_INFO_LOADED_ACTION';
export const ERROR_OCCURRED_ACTION = 'ERROR_OCCURRED_ACTION';
export const CLEAR_MESSAGE_ACTION = 'CLEAR_MESSAGE_ACTION';
export const LOAD_CURRENT_USER_ACTION = 'LOAD_CURRENT_USER_ACTION';
export const CURRENT_USER_LOADED_ACTION = 'CURRENT_USER_LOADED_ACTION';

export class LoadSystemInfoAction implements Action {
  readonly type = LOAD_SYSTEM_INFO_ACTION;
}

export class SystemInfoLoadedAction implements Action {
  readonly type = SYSTEM_INFO_LOADED_ACTION;
  constructor (public payload: SystemInfo) {
  }
}

export class LoadMapsFavouritesAction implements Action {
  readonly type = LOAD_MAPS_FAVOURITE_ACTION;
  constructor (public payload: string) {
  }
}

export class MapsFavouritesLoadedAction implements Action {
  readonly type = MAPS_FAVOURITE_LOADED_ACTION;
  constructor (public payload: Array<object>) {
  }
}

export class ErrorOccurredAction implements Action {
  readonly type = ERROR_OCCURRED_ACTION;
  constructor(public payload: string) {}
}
