import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';
import {favoritesSelector} from '../../store/selectors/favorites.selector';
import {
  LoadCurrentFavouriteSelectedFromUrlAction, LoadUserFavouritesAction
} from '../../store/actions';
import {Observable} from 'rxjs/Observable';
import {currentMapSelector} from '../../store/selectors/current-map.selector';
import {apiRootUrlSelector} from '../../store/selectors/api-root-url.selector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  currentMap: any;
  mapFavourites: any;

  constructor(private store: Store<ApplicationState>, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.store.select(apiRootUrlSelector).subscribe(apiRoute => {
      /**
       * Subscribing for active route after systeminfo load and api route is retrieved
       * */
      if (apiRoute) {
        this.route
          .queryParams
          .subscribe(params => {
            if (params && params.hasOwnProperty('id')) {
              this.store.dispatch(new LoadCurrentFavouriteSelectedFromUrlAction({
                favouriteId: params.id,
                apiUrl: apiRoute
              }));
            }
          });
      }

      this.store.dispatch(new LoadUserFavouritesAction({apiUrl: apiRoute}));

    });

    this.store.select(favoritesSelector).subscribe(mapFavourites => {
      this.mapFavourites = mapFavourites;
    })

  }

}
