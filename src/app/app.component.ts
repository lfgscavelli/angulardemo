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
  title = 'app test';
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

    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
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