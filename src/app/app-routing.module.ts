import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from "./playlist/playlist.component";
import {LoginComponent} from "./user/login/login.component";
import {RegitryComponent} from "./user/regitry/regitry.component";
import {SongComponent} from "./user/song/song.component";
import {SonglistComponent} from "./user/songlist/songlist.component";

const routes: Routes = [
  {path: '', component: PlaylistComponent},
  {path: 'registry', component: RegitryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-song', component: SongComponent},
  {path: 'songs', component: SonglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
