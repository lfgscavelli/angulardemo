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
  errorMessage: string;

  constructor(public rest: RestApiProvider) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.rest.getArticles('19') // id portlets
    .subscribe(
      (articles: Article[]) => { this.articles = articles.items,
      error =>  this.errorMessage = <any>error
      } );
  }

  articleSelected(c) {
    this.rest.getArticle(c.url)
    .subscribe(
      article => this.article = article,
      error =>  this.errorMessage = <any>error
    );
  }

}
