import { Action } from "@ngrx/store";
import { Currency } from "src/app/utils/currency.service";

export enum ECurrencyAction {
    GetCurrency = '[Currency] Get Currency'
}

export class GetCurrency implements Action {
    public readonly type = ECurrencyAction.GetCurrency
    constructor( public payload: Currency[]) {}
}

export type CurrencyActions = GetCurrency