/**
 * Created by mpande on 8/21/17.
 */

import {Injectable} from '@angular/core';
import {SystemInfoService} from '../../providers/system-info.service';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {
  ErrorOccurredAction
} from '../actions';
import {MapService} from '../../providers/map-service.service';
@Injectable()
export class MapViewEffects {
  constructor(private mapService: MapService,
              private actions$: Actions) {
  }


}
