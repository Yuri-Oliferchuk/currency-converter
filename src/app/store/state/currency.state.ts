import { Currency } from "src/app/utils/currency.service";

export interface ICurrencyState {
    currency: Currency[]
}

export const initialCurrencyState: ICurrencyState = {
    currency: []
}