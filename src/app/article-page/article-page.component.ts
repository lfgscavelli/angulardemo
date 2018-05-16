/**
 * ArticleListComponent - Master
 * ArticlePageComponent - Detail
 */

import { Component, OnInit } from '@angular/core';
import { RestApiProvider } from '../../providers/rest-api';
import { ActivatedRoute } from "@angular/router";
import {Article} from '../model/article.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  article: Article;

  constructor(private rest: RestApiProvider, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.rest.getArticleById(id)
      .subscribe(
        (article) => { this.article = article['items'][0] }
      );
  }




}
