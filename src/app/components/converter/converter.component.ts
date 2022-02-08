import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResponseCard } from 'src/app/models/response-card';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  responseCard: ResponseCard = new ResponseCard();
  answerHistory: ResponseCard[] = [];
  tempUnits: string[] = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];
  volumeUnits: string[] = ['liters', 'tablespoons', 'cubic-inches', 'cups', 'cubic-feet', 'gallons'];

  constructor(
    private formsMod: FormsModule ) { }

  ngOnInit(): void {
  }

  temperatureGrader(responseCard: ResponseCard): ResponseCard {
    if (responseCard.inputUnit === responseCard.targetUnit) {
      return responseCard;
    } else if (responseCard.inputUnit === 'Kelvin') {
      let authoritativeAnswer = this.kelvinConverter(responseCard.inputValue, responseCard.targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(responseCard.studentResponse);
      if (roundedAnswer === roundedResponse) {
        responseCard.output = 'Correct';
      } else {
        responseCard.output = "Incorrect";
      }
    } else if (responseCard.inputUnit === 'Celsius') {
      let authoritativeAnswer = this.celsiusConverter(responseCard.inputValue, responseCard.targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(responseCard.studentResponse);
      if (roundedAnswer === roundedResponse) {
        responseCard.output = 'Correct';
      } else {
        responseCard.output = "Incorrect";
      }
    } else if (responseCard.inputUnit === 'Fahrenheit') {
      let authoritativeAnswer = this.fahrenheitConverter(responseCard.inputValue, responseCard.targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(responseCard.studentResponse);
      if (roundedAnswer === roundedResponse) {
        responseCard.output = 'Correct';
      } else {
        responseCard.output = "Incorrect";
      }
    } else if (responseCard.inputUnit === 'Rankine') {
      let authoritativeAnswer = this.rankineConverter(responseCard.inputValue, responseCard.targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(responseCard.studentResponse);
      if (roundedAnswer === roundedResponse) {
        responseCard.output = 'Correct';
      } else {
        responseCard.output = "Incorrect";
      }
    }
    this.answerHistory.push(responseCard);
    responseCard = new ResponseCard();
    return responseCard;
  }

  volumeGrader(inputValue: number, studentResponse: number, inputUnit: string, targetUnit: string): string {
    let result = 'invalid';
    if (inputUnit === targetUnit) {
      return result;
    } else if (inputUnit === 'liters') {
      let authoritativeAnswer = this.litersConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    } else if (inputUnit === 'tablespoons') {
      let authoritativeAnswer = this.tablespoonsConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    } else if (inputUnit === 'cubic-inches') {
      let authoritativeAnswer = this.cubicInchesConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    } else if (inputUnit === 'cups') {
      let authoritativeAnswer = this.cupsConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    } else if (inputUnit === 'cubic-feet') {
      let authoritativeAnswer = this.cubicFeetConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    } else if (inputUnit === 'gallons') {
      let authoritativeAnswer = this.gallonsConverter(inputValue, targetUnit);
      let roundedAnswer = this.rounder(authoritativeAnswer);
      let roundedResponse = this.rounder(studentResponse);
      if (roundedAnswer === roundedResponse) {
        return 'Correct';
      } else {
        return 'Incorrect';
      }
    }
    return result;
  }

  rounder(inputValue: number):number {
    let multiplier = Math.pow(10, 1 || 0);
    return Math.round(inputValue * multiplier);
  }

  kelvinConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'Celsius') {
      convertedResult = inputValue - 273.15;
    } else if (targetUnit === 'Fahrenheit') {
      convertedResult = 1.8 * (inputValue - 273) + 32;
    } else if (targetUnit === 'Rankine') {
      convertedResult = inputValue * 1.8;
    }
    return convertedResult;
  }

  celsiusConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'Kelvin') {
      convertedResult = inputValue + 273.15;
    } else if (targetUnit === 'Fahrenheit') {
      convertedResult = 1.8 * inputValue + 32;
    } else if (targetUnit === 'Rankine') {
      convertedResult = (inputValue + 273.15) * 1.8;
    }
    return convertedResult;
  }

  fahrenheitConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'Kelvin') {
      convertedResult = 1.8 * inputValue + 459.67;
    } else if (targetUnit === 'Celsius') {
      convertedResult = (inputValue - 32) * (5/9);
    } else if (targetUnit === 'Rankine') {
      convertedResult = inputValue + 459.67;
    }
    return convertedResult;
  }

  rankineConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'Kelvin') {
      convertedResult = inputValue / 1.8;
    } else if (targetUnit === 'Celsius') {
      convertedResult = (inputValue - 491.67) * (5/9);
    } else if (targetUnit === 'Fahrenheit') {
      convertedResult = inputValue - 459.67;
    }
    return convertedResult;
  }

  litersConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'tablespoons') {
      convertedResult = inputValue * 67.628045;
    } else if (targetUnit === 'cubic-inches') {
      convertedResult = inputValue * 61.023744;
    } else if (targetUnit === 'cups') {
      convertedResult = inputValue * 4.226753;
    } else if (targetUnit === 'cubic-feet') {
      convertedResult = inputValue * 0.035315;
    } else if (targetUnit === 'gallons') {
      convertedResult = inputValue * 0.264172;
    }
    return convertedResult;
  }

  tablespoonsConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'liters') {
      convertedResult = inputValue * 0.014787 ;
    } else if (targetUnit === 'cubic-inches') {
      convertedResult = inputValue * 0.902344;
    } else if (targetUnit === 'cups') {
      convertedResult = inputValue / 16;
    } else if (targetUnit === 'cubic-feet') {
      convertedResult = inputValue * 0.000522;
    } else if (targetUnit === 'gallons') {
      convertedResult = inputValue / 256;
    }
    return convertedResult;
  }

  cubicInchesConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'liters') {
      convertedResult = inputValue * 0.016387;
    } else if (targetUnit === 'tablespoons') {
      convertedResult = inputValue * 1.108225;
    } else if (targetUnit === 'cups') {
      convertedResult = inputValue * 0.069264;
    } else if (targetUnit === 'cubic-feet') {
      convertedResult = inputValue / 1728;
    } else if (targetUnit === 'gallons') {
      convertedResult = inputValue / 231;
    }
    return convertedResult;
  }

  cupsConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'liters') {
      convertedResult = inputValue * 0.236588;
    } else if (targetUnit === 'tablespoons') {
      convertedResult = inputValue * 16;
    } else if (targetUnit === 'cubic-inches') {
      convertedResult = inputValue * 14.4375;
    } else if (targetUnit === 'cubic-feet') {
      convertedResult = inputValue * 0.008355;
    } else if (targetUnit === 'gallons') {
      convertedResult = inputValue / 16;
    }
    return convertedResult;
  }

  cubicFeetConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'liters') {
      convertedResult = inputValue * 28.316847;
    } else if (targetUnit === 'tablespoons') {
      convertedResult = inputValue * 1915.012987;
    } else if (targetUnit === 'cubic-inches') {
      convertedResult = inputValue * 1728;
    } else if (targetUnit === 'cups') {
      convertedResult = inputValue * 119.688312;
    } else if (targetUnit === 'gallons') {
      convertedResult = inputValue * 7.480519;
    }
    return convertedResult;
  }

  gallonsConverter(inputValue: number, targetUnit: string): number {
    let convertedResult = 0;
    if (targetUnit === 'liters') {
      convertedResult = inputValue * 3.785412;
    } else if (targetUnit === 'tablespoons') {
      convertedResult = inputValue * 256;
    } else if (targetUnit === 'cubic-inches') {
      convertedResult = inputValue * 231;
    } else if (targetUnit === 'cups') {
      convertedResult = inputValue * 16;
    } else if (targetUnit === 'cubic-feet') {
      convertedResult = inputValue * 0.133681;
    }
    return convertedResult;
  }
}
