import {Action} from '@ngrx/store';
import {CurrentUser} from '../model/current-user';
import {SystemInfo} from '../providers/system-info.service';
export const LOAD_SYSTEM_INFO_ACTION = 'LOAD_SYSTEM_INFO_ACTION';
export const SYSTEM_INFO_LOADED_ACTION = 'SYSTEM_INFO_LOADED_ACTION';
export const LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION = 'LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION';
export const CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION = 'CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION';
export const LOAD_USER_FAVOURITES_ACTION = 'LOAD_USER_FAVOURITES_ACTION';
export const USER_FAVOURITES_LOADED_ACTION = 'USER_FAVOURITES_LOADED_ACTION';
export const RETRIEVE_CURRENT_MAP_VISUALIZATION_OBJECT = 'RETRIEVE_CURRENT_MAP_VISUALIZATION_OBJECT';
export const CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED = 'CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED';
export const ERROR_OCCURRED_ACTION = 'ERROR_OCCURRED_ACTION';

export class LoadSystemInfoAction implements Action {
  readonly type = LOAD_SYSTEM_INFO_ACTION;
}

export class SystemInfoLoadedAction implements Action {
  readonly type = SYSTEM_INFO_LOADED_ACTION;

  constructor(public payload: SystemInfo) {
  }
}

/**
 * LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION
 * */
export class LoadUserFavouritesAction implements Action {
  readonly type = LOAD_USER_FAVOURITES_ACTION;

  constructor(public payload: any) {
  }
}

/**
 * CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION
 * */
export class UserFavouritesLoadedAction implements Action {
  readonly type = USER_FAVOURITES_LOADED_ACTION;

  constructor(public payload: SystemInfo) {
  }
}


/**
 * LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION
 * */
export class LoadCurrentFavouriteSelectedFromUrlAction implements Action {
  readonly type = LOAD_CURRENT_FAVOURITE_SELECTED_FROM_URL_ACTION;

  constructor(public payload: any) {
  }
}

/**
 * CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION
 * */
export class CurrentFavouriteSelectedFromUrlLoadedAction implements Action {
  readonly type = CURRENT_FAVOURITE_SELECTED_FROM_URL_LOADED_ACTION;

  constructor(public payload: SystemInfo) {
  }
}

/**
 * RETRIEVE_CURRENT_MAP_VISUALIZATION_OBJECT
 * */
export class RetrieveCurrentMapVisualizationObject implements Action {
  readonly type = RETRIEVE_CURRENT_MAP_VISUALIZATION_OBJECT;

  constructor(public payload: SystemInfo) {
  }
}

/**
 * CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED
 * */
export class CurrentMapVisualizationObjectRetrieved implements Action {
  readonly type = CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED;

  constructor(public payload: SystemInfo) {
  }
}

/**
 * CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED
 * */
export class UpdateCurrentMapAction implements Action {
  readonly type = CURRENT_MAP_VISUALIZATION_OBJECT_RETRIEVED;

  constructor(public payload: SystemInfo) {
  }
}

/**
 * ERROR_OCCURRED_ACTION
 * */
export class ErrorOccurredAction implements Action {
  readonly type = ERROR_OCCURRED_ACTION;

  constructor(public payload: string) {
  }
}
