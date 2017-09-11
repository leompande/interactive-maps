/**
 * Created by mpande on 9/8/17.
 */
import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import {ApplicationState} from '../application-state';
import 'rxjs/add/operator/mergeMap';
import {AnalyticsLoadedAction, ErrorOccurredAction, LOAD_ANALYTICS_ACTION} from '../actions';
import {AnalyticsService} from '../../providers/analytics.service';
@Injectable()
export class AnalyticsEffect {
  constructor(private actions$: Actions,
              private store$: Store<ApplicationState>,
              private analyticsService: AnalyticsService) {
  }


  @Effect() currentfavourite$: Observable<Action> = this.actions$
    .ofType(LOAD_ANALYTICS_ACTION)
    .switchMap((action) => this.analyticsService.getAnalytics(action.payload))
    .map((currentFavourite) => new AnalyticsLoadedAction(currentFavourite))
    .catch(() => Observable.of(new ErrorOccurredAction('Problem occurred during preparing analytics')));


}
