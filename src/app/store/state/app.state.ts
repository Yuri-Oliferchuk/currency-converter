import { ICurrencyState, initialCurrencyState } from "./currency.state";
import { IInitialState, initialInitializeState } from "./initialize.state";

export interface IAppState {
    currency: ICurrencyState
    initialize: IInitialState
}

export const initialAppState: IAppState = {
    currency: initialCurrencyState,
    initialize: initialInitializeState
}

export function getInitialState(): IAppState {
    return initialAppState
}