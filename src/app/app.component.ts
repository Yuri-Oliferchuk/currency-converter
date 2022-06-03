import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetCurrency } from './store/actions/currency.action';
import { ToggleInitializeStatus } from './store/actions/initialize.action';
import { selectInitialization } from './store/selectors/initialize.selector';
import { IAppState } from './store/state/app.state';
import { CurrencyService } from './utils/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config$ = this._store.pipe(select(selectInitialization))

  constructor( private currencyServise: CurrencyService, 
               private _store: Store<IAppState> ) {}

  ngOnInit(): void {
    this.currencyServise.load().subscribe({
      next: (currency: any) => {
        this._store.dispatch(new GetCurrency(currency))
        this._store.dispatch(new ToggleInitializeStatus)
      },
      error: (e) => console.error(e)
    })
  }
}
