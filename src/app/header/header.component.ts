import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCurrencyArray } from '../store/selectors/currency.selector';
import { IAppState } from '../store/state/app.state';
import { Currency } from '../utils/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usdRate: number;
  eurRate: number;
  plnRate: number;
  currency$ = this._store.pipe(select(selectCurrencyArray))

  constructor( private _store: Store<IAppState> ) {}

  ngOnInit(): void {
    this.currency$.subscribe((value: any) => this.usdRate = value.filter((f: Currency) => f.cc === 'USD')[0].rate)    
    this.currency$.subscribe((value: any) => this.eurRate = value.filter((f: Currency) => f.cc === 'EUR')[0].rate)    
    this.currency$.subscribe((value: any) => this.plnRate = value.filter((f: Currency) => f.cc === 'PLN')[0].rate)    
  }

}
