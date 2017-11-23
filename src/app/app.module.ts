import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  AppC1,
          KeyUpCompV1,
          KeyUpCompV2,
          KeyUpCompV3,
          KeyUpCompV4,
          LBComp,
          LTComp,
          AppElem1
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
    AppElem1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppC1]
})
export class AppModule { }
