import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit.component';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ProduitComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpServiceService]
})
export class AppModule { }
