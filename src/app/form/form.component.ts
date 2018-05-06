import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() articleCreated = new EventEmitter<Article>();
  articles: Array<Article> = [];

  constructor() { }

  ngOnInit() {
  }

	createArticle(title: string, body: string) {
    let article = new Article(title, body);
    this.articleCreated.emit(article);
    this.articles.push(article);
    console.log(this.articles)
	}

}
