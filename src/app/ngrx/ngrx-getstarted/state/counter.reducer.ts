import {createReducer, on} from "@ngrx/store"
import {CounterActions} from "./counter.actions";
import {AppCounterState} from "./counter.state";

export const initialState: AppCounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, ({count}: AppCounterState) => ({count: count + 1})),
  on(CounterActions.decrement, ({count}: AppCounterState) => ({count: count - 1})),
  on(CounterActions.reset, ({count}: AppCounterState) => ({count: 0})),
  on(CounterActions.getDataSuccess, (state, {count}) => ({count})),
)
