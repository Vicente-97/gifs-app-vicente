import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Gif, GIFSearchResponse } from './gifs-page/interfaces/searchResponse.Interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _historial:string[]=[

  ]
  private api_key:string='El8ukj9j02TD8qV9n6s0J8Uvg0vXGAAo';
  private url:string ='https://api.giphy.com/v1/gifs/search';
   results : Gif[]=[]
  history:string[]=[]
  constructor(private http : HttpClient) { 
    this._historial=JSON.parse(localStorage.getItem('Gifs-Query')!)||[]
  }

  get historial():string[]{
    return [...this._historial]
  }

  buscarGifs ( query: string):void{
    if(this._historial.indexOf(query)==-1){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10)
      localStorage.setItem('Gifs-Query',JSON.stringify(this._historial))

    }
     
    
  

    console.log(this._historial)


    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q',query)
    .set('limit', 10)


    this.http.get<GIFSearchResponse>(this.url,{params})
    .subscribe((resp)=>this.results = resp.data
    
    
    )



  }


}
