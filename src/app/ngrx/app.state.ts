import {NgrxState} from "./ngrx-walkthrough/state/ngrx.state";
import {AppCounterState} from "./ngrx-getstarted/state/counter.state";

export interface AppState {
  ngrx: NgrxState,
  counter: AppCounterState
}
