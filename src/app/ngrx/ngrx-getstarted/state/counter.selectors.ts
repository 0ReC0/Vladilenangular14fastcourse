import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppCounterState} from "./counter.state";

export namespace CounterSelectors {
  export const featureName = "count"

  export const selectFeature = createFeatureSelector<AppCounterState>(featureName)

  export const selectFeatureCount = createSelector(selectFeature,
    (state) => state.count)
}
