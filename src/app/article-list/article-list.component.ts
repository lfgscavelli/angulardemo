import { Component, OnInit } from '@angular/core';
import { RestApiProvider } from '../../providers/rest-api';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  article: Article;
  errorMessage = '';
  contents: string;

  // Iniezione di dipendenza di Angular - rest: RestApiProvider
  constructor(private rest: RestApiProvider) {}

  ngOnInit() {
    this.searchArticles();
  }

  getArticles() {
    this.rest.getArticles('35') // id portlets 19
    .subscribe(
      (articles: Article[]) => { this.articles = articles['items'], // { ...articles }
      error =>  this.errorMessage = <any>error;
      }
    );
  }

  searchArticles() {
    this.rest.searchArticles('35', 'angular' )
    .subscribe(
      (articles: Article[]) => { this.articles = articles['items'],
        error =>  this.errorMessage = <any>error;
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
  }
*/

  addArticles() {
    this.rest.addArticle(new Article())
    .subscribe(article => this.articles.push(article));
  }

  deleteArticle(id: number) {
    this.rest.deleteArticle(id).subscribe();
  }

  // recupero ulteriori dati dal Back end
  // (click)="articleSelected(c)" da inserire nel template
  articleSelected(c) {
    this.rest.getArticle(c.url)
    .subscribe(
      article =>  this.article = article,
      error =>  this.errorMessage = <any>error
    );
  }

  getTextFile(file: string) {
    this.rest.getTextFile(file) // 'assets/textfile.txt'
    .subscribe(results => this.contents = results);
  }

}
