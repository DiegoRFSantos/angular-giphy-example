import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GiphySearchService {
  
  constructor(private http: HttpClient) 
  {

  }

  searchGiphy(limit: string, term: string){
    const url:string = "http://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=EBwmw9BbbFXFAtUM1ts5YnkrN4HNYq6q&limit=" + limit;
    return this.http.get<any>(url);
  }
}
