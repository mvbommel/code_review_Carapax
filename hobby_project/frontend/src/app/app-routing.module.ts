import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectStageComponent } from './project-stage/create-project-stage/create-project-stage.component';
import { ProjectStageComponent } from './project-stage/project-stage.component';
import { CreateProjectTypeComponent } from './project-type/create-project-type/create-project-type.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectComponent } from './project/project.component';
import { CreateSteeltypeComponent } from './steel-type/create-steeltype/create-steeltype.component';
import { SteelTypeComponent } from './steel-type/steel-type.component';


const routes: Routes = [
  {path: 'projects', component: ProjectComponent},
  {path: 'create/project', component: CreateProjectComponent},
  { path: 'projects/:id', component: ProjectDetailComponent },
  {path: 'edit/project/:id', component: ProjectEditComponent},
  {path: 'steelType', component: SteelTypeComponent},
  {path: 'create/steelType', component: CreateSteeltypeComponent},
  {path: 'type', component: ProjectTypeComponent},
  {path: 'create/type', component: CreateProjectTypeComponent},
  {path: 'stage', component: ProjectStageComponent},
  {path: 'create/stage', component: CreateProjectStageComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: 'projects' }
]

export const AppRoutingModule = RouterModule.forRoot(routes);