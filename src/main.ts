import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { provideForms,disableDeprecatedForms  } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyD7cBIWrW4nbWXsnsGeQ71mAbYe2RY8bKA",
    authDomain: "angular-test-6bf90.firebaseapp.com",
    databaseURL: "https://angular-test-6bf90.firebaseio.com",
    storageBucket: "angular-test-6bf90.appspot.com",
  }),
  provideForms(),
  disableDeprecatedForms(),
  APP_ROUTER_PROVIDERS
]).catch((err:any) => console.error(err));

