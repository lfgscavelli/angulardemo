/**
 *  Created by LFG Scavelli on 22/11/2017.
 */
import { Component } from '@angular/core';
import { Article } from './article';
import { Person } from './person';
import { Post } from './post';

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// es. 1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
@Component({
  selector: 'app-1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor () {

    // numerici a virgola mobile
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let num: number;
    let decimal: number;
    let hex: number;
    let binary: number;
    let octal: number;
    num = 123;
    decimal = 1.23;
    hex = 0xf00d;
    binary = 0b1010;
    octal = 0o744;

    // stringa e modelli di stringa
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let title: string = 'App demo';
    let sentence: string;

    // il carattere back-tick consente di scrivere il testo su più righe
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let multiriga = `
      con l'uso del carattere back-tick
      la stringa può
      estendersi su 
      più righe`;
    console.log(multiriga);

    // il seguente modello
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    sentence  = 'Ciao, Il mio nome è ' + title + '.\n\n' +
    'Avrò ' + (num + 1) + ' anni il prossimo mese ';
    
    // equivale al seguente modello - il carattere back-tick consente l'estensione delle variabili, usando ${...}
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    sentence  = `Ciao, il mio nome è ${ title }.
    Avrò ${ num + 1 } anni il prossimo mese.`;

    // asserzioni di tipo
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    num = (<string>title).length;
    num = (title as string).length;

    // booleano
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let isView: boolean = false; // true

    // oggetto
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let obj: {name: string, cognome: string, eta: number};
    obj = {'name': 'Vito', 'cognome': 'Marelli', 'eta': 18};
    console.log(obj.eta);

    // array - type[] oppure Array<Type>
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let arrayNum: number[]; // array di numeri
    let arrayNum2: Array<number>; // alternativa a number[]
    let arrayStr: string[]; // array di stringhe - oppure Array<string>;
    arrayNum = arrayNum2 = [1, 2, 3, 4];
    let boolArray: boolean[] = [true, false];

    // array di oggetti
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let arrayObj: Array<Object>;
    arrayObj  = [
      { 'name': 'Vittorio','eta': 36 },
      { 'name': 'Vito','eta': 50 },
      { 'name': 'Alberto','eta': 70 }
    ];
    console.log(arrayObj[1]);
    let arrayObj2: {name: string, cognome:string, eta: number}[];

    // tuple
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
    let tuple: [string, number];
    tuple = ['hello', 10];
    console.log(tuple[0].substr(1));
    console.log(tuple[5].toString());

    // qualunque tipo
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
    let qualsiasi: any;
    qualsiasi = 'maybe a string instead';
    qualsiasi = false;
    let list: any[] = [1, true, 'free'];
    list[1] = 100;

    // modelli di object e array - Destructuring
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
    const {cognome: co, eta: et} = obj;
    const {cognome, eta} = obj; // or var {cognome, eta} = obj;
    console.log(cognome);

    let {w, x, ...altro} = {w: 1, x: 2, y: 3, z: 4};
    console.log(w, x, altro); // 1, 2, {y:3,z:4}

    let [n, m] = arrayNum;
    let [a, b, ...remaining] = arrayNum;
    console.log(a, b, remaining); // 1, 2, [3,4]

    // Nulla e indefinita - possono essere assegnati a qualsiasi altro
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
    let indefinita: undefined;  // non definita
    let nulla: null = null; // nulla
    let num1: number = null;
    let str: string = undefined;

    // map
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let map = new Map([
      ["A",1]
    ]);

    map.set("B",2)
    .set("C",3)
    .set("D",4);
    console.log(map.get("A")); 
    // map.size; map.has("A"); map.delete("A"); map.clear(); map.keys(); map.values(); map.entries() ...

    // set - solo chiavi
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let set = new Set(['A']);
    set.add('B')
    .add('C');
    // set.size; set.has("A"); set.delete("B"); set.clear()...

    // tipo function
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let fun: Function;
    fun = () => console.log("Assegno una funzione");

    // enum
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    enum Color {Red=1, Green, Blue}; // con Red=1 l'indice parte da 1 altrimenti da 0
    let c: Color = Color.Green; // Color[2] or 3

    // domain model - class
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let article: Article = new Article('Articolo example', 'bla bla bla');
    let articles: Array<Article>;
    articles = [
      new Article('primo articolo', 'bla bla bla'),
      new Article('secondo articolo', 'bla bla bla'),
      new Article('terzo articolo', 'bla bla bla')
    ];
    let myArticle = articles[1];

    // domain model - interface
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let person: Person;
    person = {
      firstName: 'Vito',
      secondName: 'Marelli',
      eta: 18
    };
    console.log(person.eta);

    // domain model - inline
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let person2: {
      firstName: string;
      secondName: string;
      eta: number;
    };
    person2 = {
      firstName: 'Vito',
      secondName: 'Marelli',
      eta: 18
    };
    type PersonInLine = {
      firstName: string;
      secondName: string;
      eta: number;
    }
    let person3: PersonInLine = {firstName:"Vito",secondName:"Marelli",eta:18};
    let person4: PersonInLine = {firstName:"Marco",secondName:"traitti",eta:18};


    // Tipi letterali - definition
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let hello: 'hello';
    type Direction = "Top" | "Right" | "Bottom" | "Left";
    type OneToFive = 1 | 2 | 3 | 4 | 5;
    type Bools = true | false;

    let d: Direction = "Left";

    // Alias
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    type StrOrNum = string | number;
    let sample: StrOrNum;
    sample = 123;
    sample = '123';
    type Text = string | { text: string };
    type Coordinates = [number, number];
    type Callback = (data: string) => void;

    // controlli sul tipo
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    if (typeof title === 'string') console.log(title.substr(1));
    if (article instanceof Article) console.log(article.toggle);
    if (title in Article) console.log(article.title);

    // Cattura del tipo di variabile
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    let foo = 123;
    let bar: typeof foo = 558;

    // Generics
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
