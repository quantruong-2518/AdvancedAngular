import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import {
  increment,
  decrement,
  reset,
} from '../../store/actions/counter.action';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private _store: Store<{ count: number }>) {
    this.count$ = this._store.select('count');
  }

  // * Lificycle

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  // * Methods

  increment() {
    this._store.dispatch(increment());
  }
  decrement() {
    this._store.dispatch(decrement());
  }
  reset() {
    this._store.dispatch(reset());
  }
}
