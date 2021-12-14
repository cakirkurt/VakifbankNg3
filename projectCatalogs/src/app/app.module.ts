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
import { FormsModule } from '@angular/forms';
import { SearchProjectPipe } from './pipes/search-project.pipe';
import { HttpClientModule } from '@angular/common/http'
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CategoryMenuComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    TaskListComponent,
    SearchProjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
