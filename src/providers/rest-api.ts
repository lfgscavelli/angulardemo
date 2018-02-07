import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs/Observable";
import { Text } from "@angular/compiler";

export interface Article {
  id: number;
  title: string;
  url: string;
  image: string;
  content_html: Text;
  date_created: Date;
  date_modified: Date;
  author: {};
}

@Injectable()
export class ArticlesService {
  baseUrl = "http://newportalcms.com/articles";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    // aggiungo eventuali parametri alla url (richiesta get)
    const params = new HttpParams().set('json',null).set('portletid','19');
    return this.http.get<any>(this.baseUrl, { params: params} );
  }

  getArticle(url): Observable<Article> {
    const params = new HttpParams().set('json',null);
    return this.http.get<Article>(url, { params: params} );
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl, article);
  }
}
