import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs/Observable";
import {Person} from "../app/base/person";

export interface Person {
  name: string;
  surname: string;
}

@Injectable()
export class PersonsService {
  constructor(private http: HttpClient) {}

  /**
   * getPersons() restituisce
   * @returns {Observable<Person>}
   */
  getPersons(): Observable<Person> {
    // aggiungo eventuali parametri alla url (richiesta get)
    const params = new HttpParams().set('id','133').set('include','true');

    return this.http.get<Person>('api/v1/peaple', { params: params})
  }

  /**
   * postPerson()
   * @returns {Observable<Person>}
   */
  postPerson(): Observable<Person> {
    // Preparo i parametri da inviare nel post
    const newPerson = {
      'name': 'Vito',
      'surname': 'Russo'
    };
    return this.http.post<Person>('api/v1/peaple', newPerson)
  }
}
