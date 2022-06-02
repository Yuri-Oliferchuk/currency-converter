import { Component, Input, OnInit } from '@angular/core';
import { Currency, CurrencyService } from '../utils/currency.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() currency: Currency[]

  constructor( ) {}

  ngOnInit(): void {
  }

}
