import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import {  Observable } from 'rxjs';
import { Provider } from './provider';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  

  constructor(private _HttpClient:HttpClient) { }


  // getAppleNews(languageNews:string):Observable<any>
  // {
  //   return this._HttpClient.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-05&to=2023-07-05&language=${languageNews}&sortBy=popularity/everything&apiKey=b80ce45824f1435d886bea39b050f656`);
  // }


  // getTeslaNews(languageNews:string):Observable<any>
  // {
  //   return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&language=${languageNews}&apiKey=b80ce45824f1435d886bea39b050f656`);
  // }



  getBusinessNews(languageNews:string , business:string):Observable<any>
  {
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=${business}&language=${languageNews}&apiKey=b80ce45824f1435d886bea39b050f656`);
  }




  // getArticlesNews():Observable<any>
  // {
  //   return this._HttpClient.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b80ce45824f1435d886bea39b050f656`);
  // }



  




}
