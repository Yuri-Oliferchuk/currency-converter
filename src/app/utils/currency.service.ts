import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"

export interface Currency {
    r030: number
    txt: string
    rate: number
    cc: string
    exchangedate: string
}

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    static url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    static currencyFilter = ['USD', 'EUR', 'CNY', 'CZK', 'GBP', 'PLN']

    constructor( private http: HttpClient ) {}

    load = (): Observable<Currency[] | any> => {
        return this.http
            .get<Currency[]>(`${CurrencyService.url}`)
            .pipe(map( currency => {
                if (!currency) {
                    return []
                }
                return currency.filter( f => CurrencyService.currencyFilter.includes(f.cc))
            }))
    }
}