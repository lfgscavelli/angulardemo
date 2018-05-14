import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Text } from "@angular/compiler";
import { Article } from "../app/model/article"

@Injectable()
export class RestApiProvider {
  private baseUrl = 'http://lara.test';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }

  // id portlet deve essere memorizzato nel db e chiesto all'utente
  getArticles(idPortlet: string): Observable<Article[]> {
    const params = new HttpParams().set('json','1').set('portletid', idPortlet);
    let art = this.http.get<Article[]>(this.baseUrl+"/articles", { params: params} );
    console.log(art);
    return art;
  }

  getArticle(url: string): Observable<Article> {
    const params = new HttpParams().set('json','1');
    let art = this.http.get<Article>(url, { params: params} );
    console.log(art);
    return art;
  }

  newArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl + '/article', article);
  }
}
