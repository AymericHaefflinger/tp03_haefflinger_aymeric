import { Component, Input } from '@angular/core';
import { from, interval } from 'rxjs';
import { HttpServiceService } from './http-service.service';
import { Article } from './article';


@Component({
  selector: 'hello',
  template: `  `,
  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
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


