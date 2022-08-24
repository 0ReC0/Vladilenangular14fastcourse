import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {NgrxAppComponent} from './ngrx-app.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgrxWalkThroughModule} from "./ngrx-walkthrough/ngrx-walkthrough.module";
import {
  GetStartedModule
} from "./ngrx-getstarted/get-started.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../../environments/environment";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    NgrxAppComponent,
  ],
  imports: [
    BrowserModule,
    NgrxWalkThroughModule,
    GetStartedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  bootstrap: [NgrxAppComponent]
})
export class NgrxModule {

}
