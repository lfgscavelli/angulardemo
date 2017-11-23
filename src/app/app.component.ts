/**
 *  Created by LFG Scavelli on 22/11/2017.
 */
import { Component } from '@angular/core';

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
@Component({
  selector: 'app2',
  template: `<h1>
                {{title}}
             </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppC2 {
  title = 'app new test';
}
