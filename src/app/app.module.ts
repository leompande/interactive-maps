import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {TopHeaderComponent} from './components/top-header/top-header.component';
import {MapViewerComponent} from './components/map-viewer/map-viewer.component';
import {INITIAL_APPLICATION_STATE} from './store/application-state';
import {SystemInfoService} from './providers/system-info.service';
import {ManifestService} from './providers/manifest.service';
import {LoginRedirectService} from './providers/login-redirect.service';
import {HttpClientService} from './providers/http-client.service';
import {CurrentUserService} from './providers/current-user.service';
import {NewLayerFormComponent} from './components/forms/new-layer-form/new-layer-form.component';
import {FavouritesComponent} from './components/favourites/favourites.component';
import {MapComponent} from './components/map/map.component';
import {AppRoutingModule} from './app.routing.module';
import {EffectsModule} from '@ngrx/effects';
import {SystemInfoEffect} from './store/effects/system-info.effect';
import {FavoriteService} from './providers/favorite.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeDataReducer} from './store/reducers/store-data-reducer';
import {uiStateReducer} from './store/reducers/ui-store-reducer';
import {FavoriteEffect} from './store/effects/favorite.effect';
import {MapService} from './providers/map-service.service';
import {MapViewEffects} from './store/effects/map-view.effects';
import {PaginationComponent} from './components/pagination/pagination.component';
import {GeoFeatureService} from './providers/geo-feature.service';
import {AnalyticsService} from './providers/analytics.service';
import {BaseMaps} from './model/basemaps';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MapViewerComponent,
    NewLayerFormComponent,
    FavouritesComponent,
    MapComponent,
    PaginationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({uiState: uiStateReducer, storeData: storeDataReducer}, INITIAL_APPLICATION_STATE),
    EffectsModule.run(SystemInfoEffect),
    EffectsModule.run(FavoriteEffect),
    EffectsModule.run(MapViewEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    SystemInfoService,
    ManifestService,
    LoginRedirectService,
    HttpClientService,
    CurrentUserService,
    FavoriteService,
    MapService,
    GeoFeatureService,
    AnalyticsService,
    BaseMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
