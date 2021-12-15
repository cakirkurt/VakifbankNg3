import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'projeler', component:ProjectListComponent},
  {path:'kategoriler', component:CategoryMenuComponent},
  {path:'projeler/kategori/:id', component:ProjectListComponent},
  {path:'kategoriler/yeniKategori', component:AddCategoryComponent, canActivate:[LoginGuard]},
  {path:'projeler/yeniProje', component:AddProjectComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
