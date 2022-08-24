import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import {GlobalErrorComponent} from './components/global-error/global-error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterProductsPipe} from './pipes/filter-products.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {FocusDirective} from './directives/focus.directive';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavigationComponent} from './components/navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
