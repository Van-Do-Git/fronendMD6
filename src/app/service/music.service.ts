import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Account} from "../../model/account";
import {Song} from "../../model/song";
import {RemoveSong} from "../../model/removeSong";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private API_ACCOUNT = environment.API_LOCAL + "/account";
  private API_SONG = environment.API_LOCAL + "/user";
  private API_CLIENT = environment.API_LOCAL + "/client";
  checkLogin$ = new BehaviorSubject<string>('');
  checkCurrent$ = new BehaviorSubject<string>('');
  search$ = new BehaviorSubject<string>('');
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
    return this.http.get<any>(this.API_CLIENT + '/latest');
  }

  getSongCount(): Observable<any> {
    return this.http.get<any>(this.API_CLIENT + '/count');
  }

  getSongLikes(): Observable<any> {
    return this.http.get<any>(this.API_CLIENT + '/likes');
  }

  updateSong(idSong: any): Observable<any> {
    return this.http.put<any>(this.API_CLIENT + '/updateView', idSong);
  }

  commentSong(comment: Comment): Observable<any> {
    return this.http.post(this.API_SONG + '/comment', comment);
  }

  findAllComment(idSong: any) {
    return this.http.get(this.API_CLIENT + '/comment/' + idSong)
  }

  likeThis(like: any): Observable<any> {
    return this.http.post(this.API_SONG + '/like', like)
  }

  unLike(idLked: any): Observable<any> {
    return this.http.delete(this.API_SONG + '/like/' + idLked)
  }

  findSong(idSong: any): Observable<any> {
    return this.http.get(this.API_SONG + '/song/' + idSong)
  }

  deleteSong(id: any): Observable<any> {
    return this.http.delete(this.API_SONG + '/delete/' + id);
  }

  createPlaylist(newList: any) {
    return this.http.post(this.API_SONG + '/creatlist/', newList)
  }

  findAllPlaylist(idAccount: any) {
    return this.http.get(this.API_SONG + '/playlists/' + idAccount)
  }

  getPlaylist(idPlaylist: number) {
    return this.http.get(this.API_SONG + '/playlist/' + idPlaylist)
  }

  searchSongByName(name: string) {
    return this.http.get(this.API_SONG + '/findSongByName/' + name)
  }

  addSongToList(playList: any) {
    return this.http.post(this.API_SONG + '/addSongToList', playList)
  }

  removeSong(deletethis: RemoveSong) {
    return this.http.put(this.API_SONG + '/removeSong/', deletethis)
  }

  findPlaylistById(id: any) {
    return this.http.get(this.API_CLIENT + '/playlist/' + id)
  }

  findAllPlaylistNew() {
    return this.http.get(this.API_CLIENT + '/playlists')
  }

  findAllCommentOfPlaylist(idPlaylist: any) {
    return this.http.get(this.API_CLIENT + '/playlistComment/' + idPlaylist)
  }

  commentPlaylist(comment: Comment): Observable<any> {
    return this.http.post(this.API_SONG + '/playlistComment', comment);
  }

  likeThisPlaylist(like: any) {
    return this.http.post(this.API_SONG + '/likePlaylist/', like)
  }
  unlikePlaylist(idLike:any){
    return this.http.delete(this.API_SONG +'/unlike/'+idLike);
  }

  searchSongByNameOrSinger(value: any) {
    return this.http.post(this.API_CLIENT+'/search',value);
  }
  deletePlaylist(id: any) {
    return this.http.delete(this.API_SONG+'/deletePlaylist/'+ id)
  }

  editProfile(newAccount: any) {
    return this.http.put(this.API_SONG + '/editProfile',newAccount)
  }

  changePassword(newAccount: any) {
    return this.http.put(this.API_SONG + '/changePassword',newAccount)
  }
}
