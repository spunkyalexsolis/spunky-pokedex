import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'pokemon-list'
  }  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
