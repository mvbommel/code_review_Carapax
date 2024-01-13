import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { AlertComponent } from './components/alert.component';

import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { SteelTypeComponent } from './steel-type/steel-type.component';
import { RouterModule } from '@angular/router';
import { CreateSteeltypeComponent } from './steel-type/create-steeltype/create-steeltype.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { ProjectStageComponent } from './project-stage/project-stage.component';
import { CreateProjectTypeComponent } from './project-type/create-project-type/create-project-type.component';
import { CreateProjectStageComponent } from './project-stage/create-project-stage/create-project-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    CreateProjectComponent,
    AlertComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    SteelTypeComponent,
    CreateSteeltypeComponent,
    ProjectTypeComponent,
    ProjectStageComponent,
    CreateProjectTypeComponent,
    CreateProjectStageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
