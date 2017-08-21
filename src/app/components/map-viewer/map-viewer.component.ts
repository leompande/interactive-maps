import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';

import * as L from 'leaflet';
import {currentFavoriteSelector} from "../../store/selectors/currentFavorites.selector";
@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements OnInit {
  @Input() currentFavourite$;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    // const map = L.map('map', {zoomControl: false}).setView([23.6448789, 25.3540765], 3);
    // L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   }
    // ).addTo(map);

    this.store.select(currentFavoriteSelector).subscribe((currentFavourite: any) => {
      if (currentFavourite.hasOwnProperty('id')) {
        const map = L.map('map', {zoomControl: false}).setView([currentFavourite.latitude, currentFavourite.longitude], currentFavourite.zoom);
        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }
        ).addTo(map);
        // currentFavourite.longitude
        // map.setView([ currentFavourite.longitude, currentFavourite.latitude], currentFavourite.zoom);
      }
    });
  }
}
