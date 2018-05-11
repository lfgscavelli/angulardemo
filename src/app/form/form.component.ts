import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onArticleCreated = new EventEmitter<Article>();
  @Output() onArticlesDeleted = new EventEmitter();
  stato: string[] = [
    'Pubblico',
    'Disattivo',
    'Bozza',
  ]

  constructor() { }

  ngOnInit() {
  }

	createArticle(title: string, body: string) {
    let article = new Article(title, body);
    this.onArticleCreated.emit(article);
    //this.articles.push(article);
    //console.log(this.articles)
  }
  
  deleteAllArticles() {
    this.onArticlesDeleted.emit();
  }

}
