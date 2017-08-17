import {Component, OnInit} from '@angular/core';
import {ApplicationState} from './store/application-state';
import {Store} from '@ngrx/store';
import {
  LoadMapsFavouritesAction,
  LoadSystemInfoAction
} from './store/actions';
import {apiRootUrlSelector} from './store/selectors/api-root-url.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {
    store.dispatch(new LoadSystemInfoAction());
  }

  ngOnInit() {
    this.store.select(apiRootUrlSelector).subscribe((rootUrl: any) => {
      if (rootUrl !== '') {
        this.store.dispatch(new LoadMapsFavouritesAction(rootUrl));
      }
    });
  }

}
