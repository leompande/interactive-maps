import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopHeaderComponent implements OnInit {
  showAddLayer: boolean = false;
  showFavouritePanel: boolean = false;
  wrenchButtonVisibility: boolean = true;
  showViewModeConfiguration: boolean = false;
  viewModeConfiguration: string = '2D';
  showLoading: boolean = true;
  currentFavouritePage: Array<any>;
  @Input() mapFavourites;
  @Output() favouriteSelected = new EventEmitter;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {

  }

  setCurrentFavouritePage(event){
    this.currentFavouritePage = event;
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

  toggleViewModeConfiguration() {
    this.showViewModeConfiguration = !this.showViewModeConfiguration;
  }

  changeViewMode(currentMode) {
    this.viewModeConfiguration = currentMode === '2D' ? '2D' : '3D';
  }

}
