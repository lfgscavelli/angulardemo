import { Injectable } from '@angular/core';
import { Article } from "../app/model/article.model";

@Injectable()
export class ArticleService {

    articles: Article[] = [];

    constructor() {
        this.load();
    }

    private save() {
        localStorage.setItem('articles', JSON.stringify(this.articles));
    }

    private load() {
        let savedArticles = localStorage.getItem('articles');
        if (!savedArticles) {
            return
        }
        // console.log(savedArticles);
        savedArticles = JSON.parse(savedArticles);
        // console.log(savedArticles);
        for (let i = 0; i < savedArticles.length; i++) {
            let savedArticle = savedArticles[i];
            // console.log(savedBook);
            //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
            this.articles.push(new Article(savedArticle));
        }
        // console.log(this.articles);
    }

    addArticle(article: Article) {
        if (!this.hasArticle(article)) {
            this.articles.push(article);
            this.save();
        }
    }

    removeArticle(article: Article) {
        let index = this.indexOf(article);
        this.articles.splice(index, 1);
        this.save();
    }

    hasArticle(article: Article): boolean {
        return this.indexOf(article) !== -1;
    }

    indexOf(article: Article): number {
        for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i].id === article.id) {
                return i
            }
        }
        return -1;
    }


}