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

}
