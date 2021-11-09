import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from "./playlist/playlist.component";
import {LoginComponent} from "./user/login/login.component";
import {RegitryComponent} from "./user/regitry/regitry.component";
import {SongComponent} from "./user/song/song.component";
import {SonglistComponent} from "./user/songlist/songlist.component";
import {CountComponent} from "./playlist/count/count.component";
import {CountlikeComponent} from "./playlist/countlike/countlike.component";
import {LatestComponent} from "./playlist/latest/latest.component";
import {CanactiveGuard} from "./security/canactive.guard";
import {MylistComponent} from "./user/mylist/mylist.component";
import {ManagersongComponent} from "./user/mylist/managersong/managersong.component";
import {PlaylistClientComponent} from "./playlist/playlist-client/playlist-client.component";

const routes: Routes = [
  {path: '', component: PlaylistComponent},
  {path: 'registry', component: RegitryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-song', component: SongComponent, canActivate: [CanactiveGuard]},
  {path: 'songs', component: SonglistComponent, canActivate: [CanactiveGuard]},
  {path: 'playlist', component: MylistComponent, canActivate: [CanactiveGuard]},
  {path: 'mylist/:id', component: ManagersongComponent, canActivate: [CanactiveGuard]},
  {path: 'count', component: CountComponent},
  {path: 'like', component: CountlikeComponent},
  {path: 'latest', component: LatestComponent},
  {path: 'playlist/:id', component: PlaylistClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
