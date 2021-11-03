import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from "./playlist/playlist.component";
import {LoginComponent} from "./login/login.component";
import {RegitryComponent} from "./regitry/regitry.component";
import {SongComponent} from "./song/song.component";

const routes: Routes = [
  {path: 'playlist', component: PlaylistComponent},
  {path: 'registry', component: RegitryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-song', component: SongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
