export interface UiState {
  errorMessage: string;
  systemInfo: {
    rootUrl: string;
    apiRootUrl: undefined,
    currentVersion: number;
    maxSupportedVersion: number;
    minSupportedVersion: number;
    loaded: boolean;
  };
  currentFavourite: any;
  currentMap: {
    center: Array<number>,
    zoom: number,
    layers: Array<any>
  };
}

export const INITIAL_UI_STATE = {
  errorMessage: '',
  systemInfo: {
    rootUrl: undefined,
    apiRootUrl: undefined,
    currentVersion: 2.25,
    maxSupportedVersion: 2.25,
    minSupportedVersion: 2.18,
    loaded: false
  },
  currentFavourite: undefined,
  currentMap: {
      center: [51.505, -0.09],
      zoom: 13,
      layers: [
        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    }
};
