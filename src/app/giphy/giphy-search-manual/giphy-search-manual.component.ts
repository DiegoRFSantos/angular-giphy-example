import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
  selector: 'giphy-giphy-search-manual',
  templateUrl: './giphy-search-manual.component.html',
  styleUrls: ['./giphy-search-manual.component.css']
})
export class GiphySearchManualComponent implements OnInit {

  gifs: any = [];
  limit: string;
  term: string;

  constructor(private service: GiphySearchService) { }

  ngOnInit() {
    this.limit = '10';
  }

  searchGiphy(){
    this.service.searchGiphy(this.limit,this.term).subscribe(response => {
      if(!response.data) return;

      this.gifs = response.data;
    });
  }
}
