import { Component, OnInit } from '@angular/core';
import { RestApiProvider } from '../../providers/rest-api';
import { Article } from "../model/article"

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  articles: Article[];
  article: Article;
  errorMessage: string = '';
  contents: string;

  constructor(public rest: RestApiProvider) {}

  ngOnInit() {
    this.searchArticles();
  }

  getArticles() {
    this.rest.getArticles('35') // id portlets 19
    .subscribe(
      (articles: Article[]) => { this.articles = articles['items'], // { ...articles } 
      error =>  this.errorMessage = <any>error
      }
    );
  }

  searchArticles() {
    this.rest.searchArticles('35','angular')
    .subscribe(
      (articles: Article[]) => { this.articles = articles['items'], // { ...articles } 
      error =>  this.errorMessage = <any>error
      }
    );
  }

  // example .subscribe - Observable
  /*
  searchArticles() {
    this.rest.searchArticles('35','angular')
    .subscribe(
      val => {
          console.log("GET call successful value returned in body", 
                      val);
      },
      response => {
          console.log("GET call in error", response);
      },
      () => {
          console.log("The GET observable is now completed.");
      }
    );
  }*/

  addArticles() {
    this.rest.addArticle(new Article())
    .subscribe(article => this.articles.push(article));
  }

  deleteArticle(id: number) {
    this.rest.deleteArticle(id).subscribe();
  }

  articleSelected(c) {
    this.rest.getArticle(c.url)
    .subscribe(
      article => this.article = article,
      error =>  this.errorMessage = <any>error
    );
  }

  getTextFile(file: string) {
    this.rest.getTextFile(file) //'assets/textfile.txt'
    .subscribe(results => this.contents = results);
  }

}
