import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ICurrencyState } from "../state/currency.state";

const selectCurrency = (state: IAppState) => state.currency

export const selectCurrencyArray = createSelector(
    selectCurrency,
    (state: ICurrencyState) => state.currency
)