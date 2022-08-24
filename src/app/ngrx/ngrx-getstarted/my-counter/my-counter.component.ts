import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import { CounterActions} from '../state/counter.actions';
import {AppCounterState} from "../state/counter.state";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  constructor(private store: Store<AppCounterState>) {
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  reset() {
    this.store.dispatch(CounterActions.reset())
  }

  loadData() {
    this.store.dispatch(CounterActions.getData())
  }
}
