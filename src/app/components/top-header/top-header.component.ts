import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  showAddLayer: boolean = false;
  showFavouritePanel: boolean = false;
  wrenchButtonVisibility: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Open the panel for selection of layer types
   * */
  toggleAddLayer() {
    this.cancelFavouritePanel(); // close favourites panel incase is open
    this.showAddLayer = true;
  }

  /**
   * Open the panel for selection of already created favourites
   * */
  toggleFavouritePanel() {
    this.cancelAddLayer(); // close new layer panel incase is open
    this.showFavouritePanel = true;
  }

  /**
   * Close the panel for selection of layer types
   * */
  cancelAddLayer() {
    this.showAddLayer = false;
  }

  cancelFavouritePanel() {
    this.showFavouritePanel = false;
  }

  toggleWrenchButtons() {
    this.wrenchButtonVisibility = !this.wrenchButtonVisibility;
  }

}
