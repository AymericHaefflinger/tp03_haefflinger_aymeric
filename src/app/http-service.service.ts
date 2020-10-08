import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from './article';

@Injectable({
    providedIn: 'root',
})

export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getData() : Observable<Article[]> {
    console.warn(JSON.parse('{"data":[{"nom":"produit1"},{"nom":"produit2"},{"nom":"produit3"}]}'));
    console.warn(JSON.parse('./assets/bouchon.json'));
    return this.http.get<Article[]>('https://stackblitz.com/edit/angular-ivy-knx9e4?file=src/app/assets/bouchon.json');
  }

}