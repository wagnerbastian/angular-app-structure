import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable, zip } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromDictionaries from '@app/store/dictionaries';

import { StepperService } from './components/stepper/services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  private destroy = new Subject<any>();

  constructor(
    private store: Store<fromRoot.State>,
    public stepper: StepperService
  ) { }

  ngOnInit(): void {

    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));

    this.stepper.init([
      {key: 'personal', label: 'Personal'},
      {key: 'professional', label: 'Professional'}
    ]);

    this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log("completed");
    });

    this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log("canceled");
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

}
