import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { ResponseCard } from 'src/app/models/response-card';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  showInstructions: boolean = true;
  needInstructions: boolean = false;
  numberGrade: number = 0;
  letterGrade: string = '';
  volResponseCard: ResponseCard = new ResponseCard();
  tempResponseCard: ResponseCard = new ResponseCard();
  answerHistory: ResponseCard[] = [];
  tempUnits: string[] = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];
  volumeUnits: string[] = ['liters', 'tablespoons', 'cubic-inches', 'cups', 'cubic-feet', 'gallons'];

  constructor(
    private formsMod: FormsModule
    ) { }

  ngOnInit(): void {
  }

  tempResponseCardReset() {
    this.tempResponseCard = new ResponseCard();
  }

  volResponseCardReset() {
    this.volResponseCard = new ResponseCard();
  }

  resetAnswerHistory() {
    this.answerHistory = [];
  }

  needInstructionsToggle() {
    this.needInstructions = !this.needInstructions;
  }
  showInstructionsToggleOff() {
    if (this.showInstructions) {
      this.showInstructions = !this.showInstructions;
    }
  }

  showInstructionsToggleOn() {
    if (!this.showInstructions) {
      this.showInstructions = !this.showInstructions;
      this.needInstructions = false;
    }
  }

  rounder(inputValue: number):number {
    console.log('inRounder: ');
    console.log('inputValue: ' + inputValue);
    console.log('return input rounded: ' + Math.round(inputValue * 10) / 10);
    return Math.round(inputValue * 10) / 10;
  }

  responseCardGrader(responseList: ResponseCard[]) {
    let validAnswers = 0;
    let correctAnswers = 0;
    for (let i = 0; i < responseList.length; i++) {
      if (responseList[i].output != 'Invalid') {
        validAnswers++;
        if (responseList[i].output == 'Correct') {
          correctAnswers++;
        }
      }
    }
    this.numberGrade = this.rounder((correctAnswers/validAnswers) * 100);
    this.responseCardLetterGrader(this.numberGrade);
  }

  responseCardLetterGrader(grade: number) {
    if (grade >= 97) {
      this.letterGrade = 'A+';
    } else if (grade < 97 && grade >= 93) {
      this.letterGrade = 'A';
    } else if (grade < 93 && grade >= 90) {
      this.letterGrade = 'A-';
    } else if (grade < 90 && grade >= 87) {
      this.letterGrade = 'B+';
    } else if (grade < 87 && grade >= 83) {
      this.letterGrade = 'B';
    } else if (grade < 83 && grade >= 80) {
      this.letterGrade = 'B-';
    } else if (grade < 80 && grade >= 77) {
      this.letterGrade = 'C+';
    } else if (grade < 77 && grade >= 73) {
      this.letterGrade = 'C';
    } else if (grade < 73 && grade >= 70) {
      this.letterGrade = 'C-';
    } else if (grade < 70 && grade >= 67) {
      this.letterGrade = 'D+';
    } else if (grade < 67 && grade >= 65) {
      this.letterGrade = 'D';
    } else if (grade < 65) {
      this.letterGrade = 'F';
    }
  }

  numberGradeReset() {
    this.numberGrade = 0;
  }

  letterGradeReset() {
    this.letterGrade = '';
  }

  outputAssigner(responseCard: ResponseCard, converterFunction: Function): ResponseCard {
    let authoritativeAnswer = converterFunction(responseCard.inputValue, responseCard.targetUnit);
    let roundedAnswer = this.rounder(authoritativeAnswer);
    let roundedResponse = this.rounder(responseCard.studentResponse);
    console.log('in outputAssigner');
    console.log('roundedAnswer: ' + roundedAnswer);
    console.log('roundedResponse: ' + roundedResponse);
    if (roundedAnswer === roundedResponse) {
      responseCard.output = 'Correct';
    } else {
      responseCard.output = 'Incorrect';
    }
    return responseCard;
  }

  temperatureGrader(responseCard: ResponseCard): ResponseCard {
    if (responseCard.inputUnit === responseCard.targetUnit ||
      responseCard.inputUnit === '' ||
      responseCard.targetUnit === '' ||
      responseCard.inputValue === null ||
      responseCard.studentResponse === null) {
      this.answerHistory.push(responseCard);
      responseCard = new ResponseCard();
      return responseCard;
    } else if (responseCard.inputUnit === 'Kelvin') {
      responseCard = this.outputAssigner(responseCard, this.kelvinConverter);
    } else if (responseCard.inputUnit === 'Celsius') {
      responseCard = this.outputAssigner(responseCard, this.celsiusConverter);
    } else if (responseCard.inputUnit === 'Fahrenheit') {
      responseCard = this.outputAssigner(responseCard, this.fahrenheitConverter);
    } else if (responseCard.inputUnit === 'Rankine') {
      responseCard = this.outputAssigner(responseCard, this.rankineConverter);
    }
    this.answerHistory.push(responseCard);
    return responseCard;
  }

  volumeGrader(responseCard: ResponseCard): ResponseCard {
    if (responseCard.inputUnit === responseCard.targetUnit ||
      responseCard.inputUnit === '' ||
      responseCard.targetUnit === '' ||
      responseCard.inputValue === null ||
      responseCard.studentResponse === null) {
      this.answerHistory.push(responseCard);
      responseCard = new ResponseCard();
      return responseCard;
    } else if (responseCard.inputUnit === 'liters') {
      responseCard = this.outputAssigner(responseCard, this.litersConverter);
    } else if (responseCard.inputUnit === 'tablespoons') {
      responseCard = this.outputAssigner(responseCard, this.tablespoonsConverter);
    } else if (responseCard.inputUnit === 'cubic-inches') {
      responseCard = this.outputAssigner(responseCard, this.cubicInchesConverter);
    } else if (responseCard.inputUnit === 'cups') {
      responseCard = this.outputAssigner(responseCard, this.cupsConverter);
    } else if (responseCard.inputUnit === 'cubic-feet') {
      responseCard = this.outputAssigner(responseCard, this.cubicFeetConverter);
    } else if (responseCard.inputUnit === 'gallons') {
      responseCard = this.outputAssigner(responseCard, this.gallonsConverter);
    }
    this.answerHistory.push(responseCard);
    return responseCard;
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
