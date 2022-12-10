import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:1228/users/get";

  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:1228/users/get");
    
  }

  // getAUserById(id:String):Observable<Users[]>{
  //   return this.httpClient.get<Users[]>(`${this.baseURL}/${id}`)
  // }
}

