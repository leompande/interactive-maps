import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';
import * as L from 'leaflet';
import {currentMapSelector} from '../../store/selectors/current-map.selector';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements OnInit {
  @Input() currentFavourite;
  map: any;
  currentMap: any;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    this.store.select(currentMapSelector).subscribe((currentMap: any) => {
      if (currentMap) {
        this.currentMap = currentMap;
        this.map = this.map ? this.map.remove() : null;
        this.map = L.map('map', {zoomControl: false}).setView(currentMap.center, currentMap.zoom);
        currentMap.layers.forEach((layer) => {
          layer.addTo(this.map);
        });
      }
    });
  }

  /**
   * Update map Zoom Level
   * */
  zoomIn(zoomType) {
    zoomType === 'in' ? this.map.zoomIn() :
      zoomType === 'out' ? this.map.zoomOut() :
        this.map.setZoom(this.currentMap.zoom);
  }

}
