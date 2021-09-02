import { Component, OnInit } from '@angular/core';
import * as fromDictionaries from './store/dictionaries';
import * as fromRoot from './store';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-architecture-';

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromDictionaries.Read())
  }
}
