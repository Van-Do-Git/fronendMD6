import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RegitryComponent} from './user/regitry/regitry.component';
import {LoginComponent} from './user/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./security/token.interceptor";
import {MatSliderModule} from "@angular/material/slider";
import {SongComponent} from './user/song/song.component';
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SonglistComponent } from './user/songlist/songlist.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { LatestComponent } from './playlist/latest/latest.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { CountComponent } from './playlist/count/count.component';
import { CountlikeComponent } from './playlist/countlike/countlike.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import { PluginplayComponent } from './playlist/pluginplay/pluginplay.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SongdetailComponent } from './playlist/songdetail/songdetail.component';
import { SongdialogComponent } from './playlist/songdetail/songdialog/songdialog.component';
import { MylistComponent } from './user/mylist/mylist.component';
import { CreatlistComponent } from './user/mylist/creatlist/creatlist.component';
import { ListdetailComponent } from './user/mylist/listdetail/listdetail.component';
import { DeleteComponent } from './user/mylist/delete/delete.component';
import { ManagersongComponent } from './user/mylist/managersong/managersong.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    NavbarComponent,
    RegitryComponent,
    LoginComponent,
    SongComponent,
    SonglistComponent,
    LatestComponent,
    CountComponent,
    CountlikeComponent,
    PluginplayComponent,
    SongdetailComponent,
    SongdialogComponent,
    MylistComponent,
    CreatlistComponent,
    ListdetailComponent,
    DeleteComponent,
    ManagersongComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
    MatDialogModule,
    MatSelectModule,
    MatListModule,

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
