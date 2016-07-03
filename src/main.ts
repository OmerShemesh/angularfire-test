import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {CONFIG} from './firebase-config.ts';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { provideForms,disableDeprecatedForms  } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase(CONFIG),
  provideForms(),
  disableDeprecatedForms(),
  APP_ROUTER_PROVIDERS
]).catch((err:any) => console.error(err));

