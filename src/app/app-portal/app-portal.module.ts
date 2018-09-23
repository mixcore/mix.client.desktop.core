import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../../polyfills';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppPortalRoutingModule } from './app-portal-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from '../providers/electron.service';

// import { WebviewDirective } from '../directives/webview.directive';

import { AppPortalComponent } from './app-portal.component';


import { MainNavigationComponent } from './shared/components/main-navigation/main-navigation.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';

import { HomeComponent } from './pages/home/home.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppPortalComponent,
    HomeComponent,
    MainNavigationComponent,
    MainSidebarComponent
    // WebviewDirective
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    HttpClientModule,
    AppPortalRoutingModule,
    PerfectScrollbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppPortalComponent]
})
export class AppPortalModule { }
