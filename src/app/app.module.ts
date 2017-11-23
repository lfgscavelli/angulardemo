import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppC1,
         AppC2
} from './app.component';


@NgModule({
  declarations: [
    AppC1,AppC2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppC1]
})
export class AppModule { }
