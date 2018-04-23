/**
 *  Created by LFG Scavelli on 22/11/2017.
 */
import { Component } from '@angular/core';
import { Person } from './person'; // per es. 8

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'app-1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // https://www.typescriptlang.org/docs/handbook/basic-types.html
  // tipo stringa
  title = 'app test';
  // tipi numerici
  numerolettere: number;
  decimal: number;
  hex: number;
  binary: number;
  octal: number;
  isDone: boolean;
  color: string;
  obj: {name: string, eta: number}; // oggetto
  array: number[]; // array di numeri
  arrayNum: Array<number>; // array di numeri altro modo es Array<string> etc..
  arrayObj: {name: string, eta: number}[];
  arrayObj1: Object[]; // oppure Array<Object>
  indefinita: undefined;  // non definita
  tuple: [string, number];
  qualsiasi: any;
  list: any[] = [1, true, 'free'];

  fullName: string;
  age: number;
  sentence: string;
  sentence2: string = 'Hello, my name is ' + this.fullName + '.\n\n' +
        'I\'ll be ' + (this.age + 1) + ' years old next month ';

  constructor () {
    this.isDone = false;
    this.array = [1, 2, 3]; // array di numeri
    this.color = 'red';
    this.tuple = ['hello', 10]; // OK
    this.numerolettere = (<string>this.title).length;
    this.numerolettere = (this.title as string).length;
    this.qualsiasi = 'maybe a string instead';
    this.qualsiasi = false;
    this.list[1] = 100;
    this.arrayObj  = [
          { 'name': 'Available',    'eta': 36 },
          { 'name': 'Ready',        'eta': 50 },
          { 'name': 'Started',      'eta': 70 }
    ];
    
    this.decimal = 1.23;
    this.hex = 0xf00d;
    this.binary = 0b1010;
    this.octal = 0o744;
    this.obj = {'name': 'luigi', 'eta': 15};
    const foo = 123;
    const boo = {};
    boo['test'] = 'post';
    console.log(boo);
    const too = Object.freeze({}); // obblighiamo a non modificare il valore dell'oggetto della coastante

    // il carattere back-tick consente di scrivere il testo su più righe
    let multiriga = `
      con l'uso del carattere back-tick
      la stringa può
      estendersi su 
      più righe`;
    console.log(multiriga);
    
    // il carattere back-tick consente l'estensione delle variabili, usando ${...}
    this.sentence  = `
      Ciao, il mio nome è ${ this.fullName }.
      I'll be ${ this.age + 1 } years old next month.`;
  }

  getTuple() {
    console.log(this.tuple[0].substr(1));
    console.log(this.tuple[5].toString());
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 2
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUpCompV1',
  template: `
        <input (keyup)="onKey($event)">
        <p>{{ values }}</p>
    `
})
export class KeyUpCompV1 {
  values = '';

  /*
   onKey(event: any) { // without type info
   this.values += event.target.value + ' | ';
   }
   */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 3
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'Key-Up2',
  template: `
        <input #box (keyup)="onKey(box.value)">
        <p>{{ values }}</p>
    `
})
export class KeyUpCompV2 {
  values = '';
  onKey(value: string) {
    // this.values += value + ' | ';
    this.values = value;
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 4
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'Key-Up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{ value }}</p>
  `
})
export class KeyUpCompV3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 5
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'Key-Up4',
  template: `
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpCompV4 {
  value = '';
  update(value: string) { this.value = value; }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 6
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup)="0">
    <p>{{ box.value }}</p>
  `
})
export class LBComp { }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 7
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">
    <button (click)="addHero(newHero.value)">Add</button>
    <ul><li *ngFor="let hero of heroes">{{ hero }}</li></ul>
  `
})
export class LTComp {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 8
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'Ins-Element',
  template: `
    <button (click)="onClickMe()">Click me!</button><br />{{ clickMessage }}

    <h1>My favorite Person is: {{myPerson.name}}</h1>
    <p>Persons:</p>
    <ul>
      <li *ngFor="let person of persons">
        {{ person.name }}
      </li>
    </ul>

    <img src="../../assets/images/angular.png">
    <p *ngIf="persons.length > 3">There are many persons!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppElem1 {
  clickMessage = '';

  persons = [
    new Person(1, 'Luigi'),
    new Person(13, 'Francesco'),
    new Person(15, 'Angela'),
    new Person(20, 'Tommaso')
  ];
  myPerson = this.persons[1];

  onClickMe() {
    this.clickMessage = 'Hello hai cliccato!';
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 9
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'Cons-Deb',
  template: `
    <button (click)="onClickMe($event)">Click me!</button><br />
    <button (click)="onClickMe($event.target.value)" value="Valore button">Click me!</button><br />
    <input type="text" class="form-control" (input)="getInput($event)"><br />
    <input type="text" class="form-control" [(ngModel)]="stampval2">
    <p>{{ stampval}}</p><p>{{ stampval2}}</p>
    <h1 [innerText]="'Il mio nome è ' + stampval "></h1>
    <input type="text" class="form-control" [value]='stampval'><br />
  `
})
export class ConsDebComp {
  stampval = '';
  stampval2 = '';

  onClickMe(event) {
    console.log(event);
  }
  getInput(event) {
    console.log(event.target.value);
    this.stampval = event.target.value
  }
}
