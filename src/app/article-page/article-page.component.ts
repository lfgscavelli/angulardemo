/**
 * ArticleListComponent - Master
 * ArticlePageComponent - Detail
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestApiProvider } from '../../providers/rest-api';
import { ActivatedRoute } from "@angular/router";
import { Article } from '../model/article.model';
import { Location } from '@angular/common';
import { PrismService } from '../../providers/prism.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlePageComponent implements OnInit {
  article: Article;
  highlighted: boolean = false;

  constructor(
    private rest: RestApiProvider,
    private route: ActivatedRoute,
    private location: Location,
    private PrismService: PrismService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    // const id = +this.route.snapshot.paramMap.get('id');
    // il parametro + converte la stringa in un numero
    this.rest.getArticleById(id)
      .subscribe(
        (article) => { this.article = article['items'][0] }
      );
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.PrismService.highlightAll();
      this.highlighted = true;
    }
  }

  goBack(): void {
    this.location.back();
  }

}
