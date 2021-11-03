import {Account} from "./account";
import {Validators} from "@angular/forms";

export interface Song{
  name?:string;
  path?:string;
  singer?:string;
  count?:number;
  idAccount?:number
}
