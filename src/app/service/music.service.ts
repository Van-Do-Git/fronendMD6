import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../../model/Account";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private API_ACCOUNT = environment.API_LOCAL+"/account";
  constructor(private http: HttpClient) { }
  createAcount(account: Account): Observable<any>{
    return this.http.post<any>(this.API_ACCOUNT+"/signup", account);
  }
  login(account: Account): Observable<any>{
    return this.http.post<any>(this.API_ACCOUNT+"/login", account);
  }
}
