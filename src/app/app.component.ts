import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  length: number = 0;
  passwordLength: string;
  hasLetter: boolean = false;
  hasNumber: boolean = false;
  hasSymbol: boolean = false;

  title = 'PasswordGenerate';

  onChangeLength(value: string) {
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  onChangeUseLetter() {
    this.hasLetter = !this.hasLetter;
  }

  onButtonCLick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUBWXYZ';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.hasLetter) {
      validChars += letters;
    }

    if (this.hasSymbol) {
      validChars += symbols;
    }

    if (this.hasNumber) {
      validChars += numbers
    }

    if (validChars.length == 0) {
      validChars += letters;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

}
