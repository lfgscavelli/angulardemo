import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  AppComponent,
          KeyUpCompV1,
          KeyUpCompV2,
          KeyUpCompV3,
          KeyUpCompV4,
          LBComp,
          LTComp,
          AppElem1,
          ConsDebComp,
          ArticleList
} from './app.component';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './article/article.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { RestApiProvider } from '../providers/rest-api';

@NgModule({
  declarations: [
    AppComponent,
    KeyUpCompV1,
    KeyUpCompV2,
    KeyUpCompV3,
    KeyUpCompV4,
    LBComp,
    LTComp,
    AppElem1,
    ConsDebComp,
    FormComponent,
    ArticleComponent,
    ArticleList,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestApiProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
