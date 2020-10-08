import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { environment } from '../environments/environnemts';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getData() : Observable<Article[]> {
    return this.http.get<Article[]>(environment.baseUrl + "/Products.json");
  }

}