import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl = "https://api.flickr.com/services/rest/?"
  constructor(public http:HttpClient) { }

  public getImages():Observable<any> {
    
    return this.http.get(`${this.baseUrl}method=flickr.photos.search&api_key=f455f927bcb187ff5248e5349e27f199&per_page=30&format=json&nojsoncallback=1&tags=chickenCurry`);

  }
   // function to get info from local storage
   public getImageInfoFromSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  }

  // function to set value in local staorage
  public setImageInfoInSessionStorage = (key ,data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
