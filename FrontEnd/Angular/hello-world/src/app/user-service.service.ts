import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public loggedIn:boolean=false;

  public url:string="https://jsonplaceholder.typicode.com/users"
  constructor(private httprequest:HttpClient) { }

  getUsers():Observable<any>{
    return this.httprequest.get<any>(this.url);
  }
  isLoggedIn():any{
    return this.loggedIn;
  }

}
