import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import{UserdetailsComponent} from './userdetails/userdetails.component'

const routes: Routes = [
  {path:"", redirectTo:"/user", pathMatch:'full'},
  {path:"user",component:UserComponent},
  {path:"userdetails",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
