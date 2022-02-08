export class ResponseCard {
  inputValue: number;
  inputUnit: string;
  targetUnit: string;
  studentResponse: number;
  output: string;

  constructor(inputValue: number = 0, inputUnit: string = '', targetUnit: string = '', studentResponse: number = 0, output: string = 'Invalid') {
    this.inputValue = inputValue;
    this.inputUnit = inputUnit;
    this.targetUnit = targetUnit;
    this.studentResponse = studentResponse;
    this.output = output;
  }
}
