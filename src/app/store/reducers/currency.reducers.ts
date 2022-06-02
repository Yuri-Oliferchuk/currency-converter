import { CurrencyActions, ECurrencyAction } from "../actions/currency.action";
import { ICurrencyState, initialCurrencyState } from "../state/currency.state";

export const currencyReducers = (
    state = initialCurrencyState,
    action: CurrencyActions
):ICurrencyState => {
    switch(action.type) {
        case ECurrencyAction.GetCurrency: {
            return {
                ...state,
                currency: [...state.currency, ...action.payload]
            }
        }
        default: {
            return state
        }
    }
}