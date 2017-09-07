import {Injectable} from '@angular/core';
import {SystemInfoService} from '../../providers/system-info.service';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {
  ErrorOccurredAction,
  LOAD_SYSTEM_INFO_ACTION, LoadCurrentFavouriteSelectedFromUrlAction, SYSTEM_INFO_LOADED_ACTION,
  SystemInfoLoadedAction
} from '../actions';
@Injectable()
export class SystemInfoEffect {
  constructor(private systemInfoService: SystemInfoService,
              private actions$: Actions) {
  }

  @Effect() systemInfo$: Observable<Action> = this.actions$
    .ofType(LOAD_SYSTEM_INFO_ACTION)
    .switchMap(() => this.systemInfoService.load())
    .map((systemInfo) => new SystemInfoLoadedAction(systemInfo))
    .catch(() => Observable.of(new ErrorOccurredAction('Problem occurred during initializing application')));

  //
  // @Effect() currentSelectedFavourite$: Observable<Action> = this.actions$
  //   .ofType(SYSTEM_INFO_LOADED_ACTION)
  //   .map((systemInfo) => new LoadCurrentFavouriteSelectedFromUrlAction(systemInfo))
  //   .catch(() => Observable.of(new ErrorOccurredAction('Problem occurred during initializing application')));
}
