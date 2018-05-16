import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';
import { Article } from "../app/model/article.model"

@Injectable()
export class RestApiProvider {
  private baseUrl = 'http://lara.test';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }

  getArticles(idPortlet: string): Observable<Article[]> {
    const params = new HttpParams().set('json','1').set('portletid', idPortlet);
    return this.http.get<Article[]>(this.baseUrl+"/articles", { params: params} )
    .pipe(
      retry(3), // in caso di mancato accesso, riprova la richiesta per tre volte.
      catchError(this.handleError)
    );
  }

  searchArticles(idPortlet: string, term: string): Observable<Article[]> {
      term.trim();
      const params = new HttpParams().set('json','1').set('portletid', idPortlet).set('q',term);
      return this.http.get<Article[]>(this.baseUrl+"/articles", { params: params} )
      .pipe(
        retry(3), // in caso di mancato accesso, riprova la richiesta per tre volte.
        catchError(this.handleError)
      );
  }

  getArticle(url: string): Observable<Article> {
    const params = new HttpParams().set('json','1');
    return this.http.get<Article>(url, { params: params} );
  }

  getArticleById(id: number): Observable<Article> {
    const params = new HttpParams().set('json','1').set('id',id.toString());
    return this.http.get<Article>(this.baseUrl + '/article', { params: params} );
  }

  addArticle(article: Article): Observable<Article> {
    const httpOptions = {
      //headers: new HttpHeaders({'Content-Type':  'application/json'})
      // alternativa
      headers: new HttpHeaders().set('Content-Type','application/json')
    };
    return this.http.post<Article>(this.baseUrl + '/article', article, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteArticle (id: number): Observable<{}> {
    const url = `${this.baseUrl}/article/${id}/edit`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateArticle (article: Article): Observable<Article> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this.http.put<Article>(this.baseUrl, article, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTextFile(filename: string) {
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => console.log(filename, data),
          error => console.log(filename, error)
        )
      );
  }

  private handleError(mgs: HttpErrorResponse) {
    // Si è verificato un errore sul client o sulla rete.
    if (mgs.error instanceof ErrorEvent) {
      console.error('Si è verificato un errore:', mgs.error.message);
    } else {
    // Il backend ha restituito un codice errore.
      console.error(
        `Il Backend ha restituito il codice ${mgs.status}, ` +
        `relativo al seguente errore: ${mgs.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Si è verificato un errore; cortesemente riprovare più tardi.');
  };
}
