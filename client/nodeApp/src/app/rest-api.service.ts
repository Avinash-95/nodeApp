import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  get(Link: string){
    return this.http.get(link).toPromise();
  }

  post(Link:string, body:any){
    return this.http.post(link, body).toPromise();
  }
}
