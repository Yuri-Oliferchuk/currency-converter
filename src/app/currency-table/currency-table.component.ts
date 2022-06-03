import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCurrencyArray } from '../store/selectors/currency.selector';
import { IAppState } from '../store/state/app.state';
import { Currency } from '../utils/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  currency$ = this._store.pipe(select(selectCurrencyArray))
  currencyArray: Currency[] = []

  constructor( private _store: Store<IAppState> ) {}

  ngOnInit(): void {
    this.currency$.subscribe((value: Currency[]) => this.currencyArray = [...value])      
  }
}
