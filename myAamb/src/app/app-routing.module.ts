import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  /*{
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },*/
  {
    path: 'demo',
    loadChildren: './demo/demo.module#DemoPageModule'
  },
  {
    path: 'edit/:id',
    loadChildren: './edit/edit.module#EditPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
