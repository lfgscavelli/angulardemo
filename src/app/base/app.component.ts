/**
 *  Created by LFG Scavelli on 22/11/2017.
 */
import { Component } from '@angular/core';
import { Hero } from './hero'; // per es. 8

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 1
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppC1 {
  // https://www.typescriptlang.org/docs/handbook/basic-types.html
  title = 'app test Francesco';
  color: string = "blue";
  isDone: boolean = false;
  numarticoli: number = 6;
  hex: number = 0xf00d;
  binary: number = 0b1010;
  octal: number = 0o744;
  obj: {name: string, eta: number}; // oggetto
  arrayNum: number[]; // array di numeri, string[] array di stringhe ...
  arrayNum1: Array<number>; // array di numeri, Array<string> array di stringhe ...
  arrayObj: {name: string, eta: number}[]; //array di oggetti
  indefinita: undefined;  // non definita
  tuple: [string, number, string]; // array combinati - tuple
  qualsiasi: any;
  list: any[] = [1, true, "free"];

  fullName: string;
  age: number;
  sentence: string = `Ciao, il mio nome è ${ this.fullName }.
  I'll be ${ this.age + 1 } years old next month.`;
  sentence2: string = "Hello, my name is " + this.fullName + ".\n\n" +
        "I'll be " + (this.age + 1) + " years old next month.";
  a: void = undefined; // il tipo void usato per undefined e null
  b: void = null;

  constructor () {
    this.arrayNum = [1, 2, 3];
    this.color = 'red';
    this.tuple = ["hello", 10, "world"];
    this.numarticoli = (<string>this.title).length;
    this.numarticoli = (this.title as string).length;
    this.qualsiasi = "maybe a string instead";
    this.qualsiasi = false;
    this.qualsiasi = 4;
    this.list[1] = 100;
    this.arrayObj  = [
          { "name": "Available",    "eta": 36 },
          { "name": "Ready",        "eta": 50 },
          { "name": "Started",      "eta": 70 }
    ];

  }

  getTuple() {
    console.log(this.tuple[0].substr(2));
    console.log(this.tuple[1].toString());
    console.log(this.tuple[2].toUpperCase());
  }

  stampa(): void {  // tipo void, metodo che non restituisce un valore
    console.log("hello!");
  }
}

let a = new AppC1();
a.getTuple();

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 2
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp1',
  template: `
        2. <input (keyup)="onKey($event.target.value)">
        <p>{{ values }}</p>
    `
})
export class KeyUpCompV1 {
  values = '';


   onKey(event: any) { // without type info
      this.values += event + ' | ';
   }

 /*
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
 */
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 3
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp2',
  template: `
        3. <input #box (keyup)="onKey(box.value)">
        <p>{{ values }}</p>
    `
})
export class KeyUpCompV2 {
  values = '';
  onKey(value: string) {
    //this.values += value + ' | ';
    this.values = value;
  }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 4
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp3',
  template: `
    4. <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{ value }}</p>
  `
})
export class KeyUpCompV3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 5
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp4',
  template: `
    5. <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpCompV4 {
  value = '';
  update(value: string) { this.value = value; }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 6
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'loop-back',
  template: `
    6. <input #box (keyup)="0">
    <p>{{ box.value }}</p>
  `
})
export class LBComp { }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 7
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'little-tour',
  template: `
    7. <input #newHero
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
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 8
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'InsElement',
  template: `
    8. <button (click)="onClickMe()">Click me!</button><br />{{ clickMessage }}

    <h1>My favorite hero is: {{myHero.name}}</h1>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>

    <img src="../../assets/images/angular.jpg">
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppElem1 {
  clickMessage = '';

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[1];

  onClickMe() {
    this.clickMessage = 'Hello hai cliccato!';
  }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 9
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'ConsDeb',
  template: `
    9. <button (click)="onClickMe($event)">Click me!</button><br />
    9.1 <button (click)="onClickMe($event.target.value)" value="Valore button">Click me!</button><br />
    9.2 <input type="text" (input)="getInput($event)"><br />
    9.3 <input type="text" [(ngModel)]="stampval2">
    <p>{{ stampval}}</p><p>{{ stampval2}}</p>
    <h1 [innerText]="'Il mio nome è ' + stampval "></h1>
    9.4 <input type="text" [value]='stampval'><br />
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