import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/vladilen-course/app.module';
import { environment } from './environments/environment';
import {NgrxModule} from "./app/ngrx/ngrx.module";

if (environment.production) {
  enableProdMode();
}

const bootstrapModule = NgrxModule;
// const bootstrapModule = AppModule;

platformBrowserDynamic().bootstrapModule(bootstrapModule)
  .catch(err => console.error(err));
