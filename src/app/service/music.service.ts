import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Account} from "../../model/account";
import {Song} from "../../model/song";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private API_ACCOUNT = environment.API_LOCAL + "/account";
  private API_SONG = environment.API_LOCAL + "/user";
  private API_CLIENT = environment.API_LOCAL + "/client";

  constructor(private http: HttpClient) {
  }

  createAcount(account: Account): Observable<any> {
    return this.http.post<any>(this.API_ACCOUNT + "/signup", account);
  }

  login(account: Account): Observable<any> {
    return this.http.post<any>(this.API_ACCOUNT + "/login", account);
  }

  createSong(song: Song): Observable<any> {
    return this.http.post<any>(this.API_SONG + "/create", song);
  }

  getMySongList(idAccount: number): Observable<any> {
    return this.http.get<any>(this.API_SONG + "/songs/" + idAccount);
  }

  getSongLatest(): Observable<any> {
    return this.http.get<any>(this.API_CLIENT+'/latest');
  }
  getSongCount(): Observable<any> {
    return this.http.get<any>(this.API_CLIENT+'/count');
  }
  getSongLikes(): Observable<any> {
    return this.http.get<any>(this.API_CLIENT+'/likes');
  }
  public currentSong$ = new BehaviorSubject<string>("")
}
