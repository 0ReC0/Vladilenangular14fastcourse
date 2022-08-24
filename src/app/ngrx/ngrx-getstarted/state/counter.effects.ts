import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {CounterActions} from "./counter.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {CounterService} from "../counter.service";
import {EMPTY} from "rxjs";

@Injectable()
export class CounterEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
      ofType(CounterActions.getData),
      mergeMap(() =>
        this.counterService.getData()
          .pipe(
            map((data) => CounterActions.getDataSuccess(data)),
            catchError(() => EMPTY)
          ))
    )
  );

  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}
}
