import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';
import {favoriteSelector} from "../../store/selectors/favorites.selector";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private routeObservable: any;
  favouriteId: string = null;

  constructor(private store: Store<ApplicationState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.select(favoriteSelector).subscribe(favourite => {
      // console.log("FAVOURITES FROM MAP COMPONENT");
      console.log(favourite);
    });
  }

}
