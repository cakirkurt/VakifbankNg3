import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'projeler', component:ProjectListComponent},
  {path:'kategoriler', component:CategoryMenuComponent},
  {path:'projeler/kategori/:id', component:ProjectListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
