import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StatePreviewComponent } from '../modules/state-preview/state-preview.component';
import { StateDetailsComponent } from '../modules/state-details/state-details.component';


const routes: Routes = [
 
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'', component:AppComponent, children:[
  //  {path:'home', component: StatePreviewComponent},
  //  {path:'detail', component:StateDetailsComponent}
  ]},
 
  {path:'home', component: StatePreviewComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
