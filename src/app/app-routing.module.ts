import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from "./playlist/playlist.component";
import {LoginComponent} from "./login/login.component";
import {RegitryComponent} from "./regitry/regitry.component";

const routes: Routes = [
  {path: 'playlist', component: PlaylistComponent},
  {path: 'registry', component: RegitryComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
