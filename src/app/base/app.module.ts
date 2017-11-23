import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import {  AppC1,
          KeyUpCompV1,
          KeyUpCompV2,
          KeyUpCompV3,
          KeyUpCompV4,
          LBComp,
          LTComp,
          AppElem1,
          ConsDebComp
} from './app.component';


@NgModule({
  declarations: [
    AppC1,
    KeyUpCompV1,
    KeyUpCompV2,
    KeyUpCompV3,
    KeyUpCompV4,
    LBComp,
    LTComp,
    AppElem1,
    ConsDebComp
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppC1]
})
export class AppModule { }
