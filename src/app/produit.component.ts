import { Component, Input } from '@angular/core';
import { from, interval } from 'rxjs';
import { HttpServiceService } from './http-service.service';
import { Article } from './article';


@Component({
  selector: 'produit',
  template: ` <div class="carreJeu" *ngFor="let art of Articles">
                <img src="{{art.img}}">
                <h1>{{art.nom}}</h1>
                <p>{{art.prix}}</p>
              </div> `,
  styles: [`h1 { font-family: Lato; }`]
})

export class ProduitComponent  {
  @Input() name: string;

  Articles : Article[];

  constructor(public HttpServiceService: HttpServiceService) {}


  getData(): void {
    this.HttpServiceService.getData()
      .subscribe(Articles => (this.Articles = Articles));
  }
  
  ngOnInit() {
    this.getData();
  }

}


