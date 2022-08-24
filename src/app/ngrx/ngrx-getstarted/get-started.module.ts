import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyCounterComponent} from "./my-counter/my-counter.component";
import {counterReducer} from "./state/counter.reducer";
import {MyViewComponent} from './my-view/my-view.component';
import {EffectsModule} from "@ngrx/effects";
import {CounterEffects} from "./state/counter.effects";
import {CounterService} from "./counter.service";
import {StoreModule} from "@ngrx/store";
import {AppCounterState} from "./state/counter.state";


export const GetStartedModuleEffects = [
  CounterEffects
]

@NgModule({
  declarations: [
    MyCounterComponent,
    MyViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature<AppCounterState>('count', counterReducer),
    EffectsModule.forFeature([
      ...GetStartedModuleEffects
    ]),
  ],
  providers: [CounterService],
  exports: [MyCounterComponent]
})
export class GetStartedModule {
}
