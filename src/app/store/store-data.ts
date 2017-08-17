export interface StoreData {
  currentUser: '';
  mapFavourites: any[];
  systemInfo: {
    rootUrl: string;
    apiRootUrl: undefined,
    currentVersion: number;
    maxSupportedVersion: number;
    minSupportedVersion: number;
    loaded: boolean;
  };
  currentFavourite: object;
}

export const INITIAL_STORE_DATA: StoreData = {
  currentUser: '',
  systemInfo: {
    rootUrl: undefined,
    apiRootUrl: undefined,
    currentVersion: 2.25,
    maxSupportedVersion: 2.25,
    minSupportedVersion: 2.18,
    loaded: false
  },
  mapFavourites: [],
  currentFavourite: {}
};

