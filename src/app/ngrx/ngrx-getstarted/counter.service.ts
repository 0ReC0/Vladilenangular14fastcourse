import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {AppCounterState} from "./state/counter.state";

@Injectable()
export class CounterService {

  constructor() {
  }

  getData(): Observable<AppCounterState> {
    return of({count: 5} as AppCounterState)
  }
}
