import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CounterSelectors} from "../state/counter.selectors";
import {AppCounterState} from "../state/counter.state";

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.css']
})
export class MyViewComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<AppCounterState>) {
    this.count$ = store.select(CounterSelectors.selectFeatureCount)
  }

  ngOnInit(): void {
  }

}
