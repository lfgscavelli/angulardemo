import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  AppComponent } from './app.component';
import {  FormComponent } from './form/form.component';
import {  ArticleComponent } from './article/article.component';
import {  ArticleListComponent } from './article-list/article-list.component';
import {  HttpClientModule } from '@angular/common/http';
import {  RestApiProvider } from '../providers/rest-api';
import {  PrismService } from '../providers/prism.service';
import {  HeaderComponent } from './header/header.component';
import {  HomePageComponent,
          KeyUpCompV1,
          KeyUpCompV2,
          KeyUpCompV3,
          KeyUpCompV4,
          LBComp,
          LTComp,
          AppElem1,
          ConsDebComp,
          ArticleList } from './home-page/home-page.component';
import {  NotfoundComponent } from './notfound/notfound.component';
import {  ArticlePageComponent } from './article-page/article-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomePageComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '**', component: NotfoundComponent}
];

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
    ArticleListComponent,
    HeaderComponent,
    HomePageComponent,
    NotfoundComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    RestApiProvider,
    PrismService],
  bootstrap: [AppComponent]
})
export class AppModule { }
