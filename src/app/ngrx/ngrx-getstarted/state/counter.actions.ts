import {createAction, props} from "@ngrx/store";
import {AppCounterState} from "./counter.state";

export namespace CounterActions {
  export const increment = createAction('[Counter Component] Increment')
  export const decrement = createAction('[Counter Component] Decrement')
  export const reset = createAction('[Counter Component] Reset')

  export const getData = createAction("GET_DATA")
  export const getDataSuccess = createAction("GET_DATA_SUCCESS",
    props<AppCounterState>())
}
