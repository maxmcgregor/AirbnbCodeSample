import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  tempUnits: string[] = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];
  volumeUnits: string[] = ['liters', 'tablespoons', 'cubic-inches', 'cups', 'cubic-feet', 'gallons'];

  constructor() { }

  ngOnInit(): void {
  }



  kelvinConverter(inputValue: number, targetUnit: string, response: number) {

  }

  celsiusConverter(inputValue: number, targetUnit: string, response: number) {

  }

  fahrenheitConverter(inputValue: number, targetUnit: string, response: number) {

  }

  rankineConverter(inputValue: number, targetUnit: string, response: number) {

  }

  litersConverter(inputValue: number, targetUnit: string, response: number) {

  }

  tablespoonsConverter(inputValue: number, targetUnit: string, response: number) {

  }

  cubicInchesConverter(inputValue: number, targetUnit: string, response: number) {

  }

  cupsConverter(inputValue: number, targetUnit: string, response: number) {

  }

  cubicFeetConverter(inputValue: number, targetUnit: string, response: number) {

  }

  gallonsConverter(inputValue: number, targetUnit: string, response: number) {

  }




}
