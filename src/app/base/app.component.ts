/**
 *  Created by LFG Scavelli on 22/11/2017.
 */
import { Component } from '@angular/core';
import { Article } from './article'; // per es. 8

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'app-1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // stringa
  title: string = 'App demo';

  // numerici a virgola mobile
  numerolettere: number;
  decimal: number;
  hex: number;
  binary: number;
  octal: number;

  // booleano
  isView: boolean;

  // array - type[] oppure Array<Type>
  arrayNum: number[]; // array di numeri
  arrayNum2: Array<number>; // alternativa a number[]
  arrayStr: string[]; // array di stringhe - oppure Array<string>;

  // oggetto
  obj: {name: string, cognome:string, eta: number};

  // array di oggetti
  arrayObj: Object[];
  arrayObj1: Array<Object>;
  arrayObj2: {name: string, cognome:string, eta: number}[];
  
  // tuple
  tuple: [string, number];
  
  // qualunque tipo
  qualsiasi: any;
  list: any[] = [1, true, 'free'];

  // Nulla e indefinita
  indefinita: undefined;  // non definita
  nulla: null = null; // nulla

  // modelli di stringhe con estensioni di variabili
  fullName: string = `LFG Scavelli`;
  age: number = 25;
  sentence: string;

  // articles domain model 
  articles: Array<Article>;

  // map
  map = new Map([
    ["A",1]
  ]);

  // set - solo chiavi
  set = new Set(['A']);

  // definisco un tipo function
  fun: Function;

  constructor () {
    // numerico
    this.numerolettere = (<string>this.title).length;
    this.numerolettere = (this.title as string).length;
    this.decimal = 1.23;
    this.hex = 0xf00d;
    this.binary = 0b1010;
    this.octal = 0o744;

    // booleano
    this.isView = false;

    // array numerico
    this.arrayNum = this.arrayNum2 = [1, 2, 3];

    // tuple
    this.tuple = ['hello', 10];

    // qualunque tipo
    this.qualsiasi = 'maybe a string instead';
    this.qualsiasi = false;
    this.list[1] = 100;

    // oggetto
    this.obj = {'name': 'luigi', 'cognome': 'Marelli', 'eta': 15};
    console.log(this.obj.eta);
    // model of obj
    const {cognome: co, eta: et} = this.obj; // oppure con lo stesso nome const {cognome, eta} = this.obj;

    // array di oggetti
    this.arrayObj  = [
          { 'name': 'Vittorio','eta': 36 },
          { 'name': 'Vito','eta': 50 },
          { 'name': 'Alberto','eta': 70 }
    ];

    // enum
    enum Color {Red=1, Green, Blue}; // con Red=1 l'indice parte da 1 altrimenti da 0
    let c: Color = Color.Green; // Color[2]
    
    const too = Object.freeze({}); // obblighiamo a non modificare il valore dell'oggetto della coastante

    // il carattere back-tick consente di scrivere il testo su più righe
    let multiriga = `
      con l'uso del carattere back-tick
      la stringa può
      estendersi su 
      più righe`;
    console.log(multiriga);

    // il seguente template strings
    this.sentence  = 'Ciao, Il mio nome è ' + this.fullName + '.\n\n' +
    'Avrò ' + (this.age + 1) + ' anni il prossimo mese ';
    
    // equivale al seguente modello - il carattere back-tick consente l'estensione delle variabili, usando ${...}
    this.sentence  = `Ciao, il mio nome è ${ this.fullName }.
    Avrò ${ this.age + 1 } anni il prossimo mese.`;

    // articles domain model 
    this.articles = [
      new Article('primo articolo', 'bla bla bla'),
      new Article('secondo articolo', 'bla bla bla'),
      new Article('terzo articolo', 'bla bla bla')
    ];
    let myArticle = this.articles[1];

    // map concatenato
    this.map.set("B",2)
    .set("C",3)
    .set("D",4);
    console.log(this.map.get("A")); 
    // this.map.size; this.map.has("A"); this.map.delete("A"); this.map.clear(); this.map.keys(); 
    // this.map.values(); this.map.entries()...

    // set concatenato
    this.set.add('B')
    .add('C');
    // this.set.size; this.set.has("A"); this.set.delete("B"); this.set.clear()...

    // tipo function
    this.fun = () => console.log("Assegno una funzione");

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

    <h1>My favorite Article is: {{myArticle.title}}</h1>
    <p>Articles:</p>
    <ul>
      <li *ngFor="let article of articles">
        {{ article.title }}
      </li>
    </ul>

    <img src="../../assets/images/angular.png">
    <p *ngIf="articles.length > 3">There are many articles!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppElem1 {
  clickMessage = '';

  articles = [
    new Article('primo articolo', 'bla bla bla'),
    new Article('secondo articolo', 'bla bla bla'),
    new Article('terzo articolo', 'bla bla bla')
  ];
  myArticle = this.articles[1];

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
