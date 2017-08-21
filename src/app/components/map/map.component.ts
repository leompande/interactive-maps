import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';
import {favoriteSelector} from "../../store/selectors/favorites.selector";
import {LoadMapSingleFavouriteForDisplayAction} from "../../store/actions";
import {currentFavoriteSelector} from "../../store/selectors/currentFavorites.selector";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapFavourites$: any;
  currentFavourite$: any;

  constructor(private store: Store<ApplicationState>, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.store.select(favoriteSelector).subscribe(favourite => {
      this.mapFavourites$ = favourite;
    });
    /**
     * Subscribing for active route
     * */
    this.route.params.subscribe(activeRoute => {
      if (activeRoute.id) {
        this.store.dispatch(new LoadMapSingleFavouriteForDisplayAction(activeRoute.id));
        console.log(activeRoute.id);
      }
    });
  }

}
