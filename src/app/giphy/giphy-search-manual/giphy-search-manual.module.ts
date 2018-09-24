import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    FormsModule
  ],
  declarations: [GiphySearchManualComponent],
  exports:[
    GiphySearchManualComponent
  ],
  providers: [
    GiphySearchService
  ]
})
export class GiphySearchManualModule { }
