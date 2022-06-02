import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { currencyReducers } from "./currency.reducers";
import { initializeReducers } from "./initialize.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
    currency: currencyReducers,
    initialize: initializeReducers
}