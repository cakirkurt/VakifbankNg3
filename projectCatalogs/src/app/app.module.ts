import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchProjectPipe } from './pipes/search-project.pipe';
import { HttpClientModule } from '@angular/common/http'
import { CategoryService } from './services/category.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CategoryMenuComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    TaskListComponent,
    SearchProjectPipe,
    AddProjectComponent,
    AddCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
