import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage } from 'src/app/models/projectStage';
import { steelType } from 'src/app/models/steelType';
import { Type } from 'src/app/models/projectType';
import { ProjectService, ProjectStageService, SteelTypeService, ProjectTypeService  } from 'src/app/services';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';
import { ProjectCreateRequest } from 'src/app/models';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  loading = false;
  submitted = false;

  stages: Stage[];
  types: Type[];
  steelTypes: steelType[];
  Project: Project;
  ProjectCreateRequest: ProjectCreateRequest;

  disableSteelType = null;
  disableProjectType = null;
  disableProjectStage = null;

  FRMCNTRLSteelType = 'frmSteelType';
  FRMCNTRLType = 'frmType';
  FRMCNTRLStage = 'frmStage';
  FRMCNTRLNAME = 'frmName';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private SteelTypeService: SteelTypeService,
    private ProjectTypeService: ProjectTypeService,
    private ProjectStageService: ProjectStageService,
    private alertService: AlertService,
  ) {

    this.getSteelTypes();
    this.getProjectTypes();
    this.getProjectStages();
  }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      frmSteelType: ['', Validators.required],
      frmType: ['', Validators.required],
      frmStage: ['', Validators.required],
      frmName: ['', Validators.required]
    })
  }
  
  get f() { return this.projectForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.projectForm.invalid) {
      return;
    }
    this.loading = true;
    this.Project = new Project();

    this.Project.name = this.projectForm.controls[this.FRMCNTRLNAME].value;
    this.Project.steelType = this.projectForm.controls[this.FRMCNTRLSteelType].value;
    this.Project.type = this.projectForm.controls[this.FRMCNTRLType].value;
    this.Project.stage = this.projectForm.controls[this.FRMCNTRLStage].value;
    console.log(this.Project);
    this.createProject();
  }
  getSteelTypes(){
    this.SteelTypeService.getSteelTypes()
      .pipe(first())
      .subscribe(steels => {
        this.steelTypes = steels;
        this.projectForm.controls[this.FRMCNTRLSteelType].setValue(steels[0].id);
      });
  }

  getProjectTypes(){
    this.ProjectTypeService.getProjectTypes()
      .pipe(first())
      .subscribe(Types => {
        this.types = Types;
        this.projectForm.controls[this.FRMCNTRLType].setValue(Types[0].id);
      });
  }
  
  getProjectStages(){
    this.ProjectStageService.getProjectStages()
    .pipe(first())
    .subscribe(stages => {
      this.stages = stages;
      this.projectForm.controls[this.FRMCNTRLStage].setValue(stages[0].id);
    });
  }

  createProject(){
    this.projectService.createProject(this.Project)
    .pipe(first())
    .subscribe(projects => {
      this.router.navigate(['/project']);
    })
  }

}

