import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCurrencyArray } from '../store/selectors/currency.selector';
import { IAppState } from '../store/state/app.state';
import { Currency } from '../utils/currency.service';

interface ICountries {
  cc: string
  title: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currency$ = this._store.pipe(select(selectCurrencyArray))
  exchangedate = ''
  countries: Array<ICountries> = [{cc: 'UAH', title: 'Гривня'}]
  rate: Array<number> = [1]
  rateFrom = 1
  rateTo = 1
  valueFrom = 1
  valueTo = this.valueFrom * (this.rateFrom/this.rateTo)

  constructor( private _store: Store<IAppState> ) {}

  ngOnInit(): void {
    this.currency$.subscribe((value: Currency[]) => 
      value.forEach((v: Currency) => {
        this.countries.push({cc: v.cc, title: v.txt})
        this.rate.push(v.rate)
        this.exchangedate = v.exchangedate
      })
    )        
  }

  onChangeFrom = (value: number): void => {
    const numValue = Number(value)
    this.valueFrom = Number(numValue.toFixed(2))
    const calc =  value * (this.rateFrom/this.rateTo)
    this.valueTo = Number(calc.toFixed(2))
  }

  onChangeTo = (value: number): void => {
    const numValue = Number(value)
    this.valueTo = Number(numValue.toFixed(2))
    const calc = value / (this.rateFrom/this.rateTo)
    this.valueFrom = Number(calc.toFixed(2))
  }

  onChangeCurrencyFrom = (cc: string): void => { 
    const currencyIndex = this.countries.findIndex((e: ICountries) => e.cc === cc);
    this.rateFrom = this.rate[currencyIndex]
    this.onChangeFrom(this.valueFrom)
  }

  onChangeCurrencyTo = (cc: string): void => { 
    const currencyIndex = this.countries.findIndex((e: ICountries) => e.cc === cc);
    this.rateTo = this.rate[currencyIndex]
    this.onChangeFrom(this.valueFrom)
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    // if (String(event.target.value).lastIndexOf('.') !== -1) {
    //   if (String(event.target.value).length - String(event.target.value).lastIndexOf('.') > 2) {
    //     event.preventDefault();
    //     return false;
    //   }
    // }
    if (charCode === 46 && String(event.target.value).indexOf('.') !== -1 ) {
      event.preventDefault();
      return false;
    }
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
