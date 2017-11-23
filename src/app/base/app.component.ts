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
  title = 'app test';
  sentence: string = `Ciao, il mio nome è ${ fullName }.
  I'll be ${ age + 1 } years old next month.`;
  sentence: string = "Hello, my name is " + fullName + ".\n\n" +
      "I'll be " + (age + 1) + " years old next month.";
  color: string = "blue";
  isDone: boolean = false;
  numarticoli: number;
  decimal: number = 6;
  hex: number = 0xf00d;
  binary: number = 0b1010;
  octal: number = 0o744;
  n: Null = null;
  obj: {name: string, eta: number}; // oggetto
  array: number[];
  arrayNum: Array<number>; // array di numeri
  arrayObj = [{name: string, eta: number}];
  indefinita: undefined;  // non definita
  tuple: [string, number];
  qualsiasi: any;
  list: any[] = [1, true, "free"];

  constructor () {
    this.array = [1, 2, 3]; // array di numeri
    this.color = 'red';
    this.tuple = ["hello", 10]; // OK
    this.numarticoli = (<string>title).length;
    this.numarticoli = (title as string).length;
    this.qualsiasi = "maybe a string instead";
    this.qualsiasi = false;
    this.list[1] = 100;
  }

  getTuple() {
    console.log(this.tuple[0].substr(1));
    console.log(this.tuple[5].toString());
  }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 2
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp1',
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
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 3
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'KeyUp2',
  template: `
        <input #box (keyup)="onKey(box.value)">
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
    <input #box (keyup.enter)="onEnter(box.value)">
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
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">

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
    <input #box (keyup)="0">
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
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 8
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'InsElement',
  template: `
    <button (click)="onClickMe()">Click me!</button><br />{{ clickMessage }}

    <h1>My favorite hero is: {{myHero.name}}</h1>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>

    <img src="../../assets/images/angular.png">
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

  onClickMe(event) {
    console.log(event);
  }
  getInput(event) {
    console.log(event.target.value);
    this.stampval = event.target.value
  }
}