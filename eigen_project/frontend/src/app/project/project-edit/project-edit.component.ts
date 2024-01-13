import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage } from 'src/app/models/projectStage';
import { steelType } from 'src/app/models/steelType';
import { Type } from 'src/app/models/projectType';
import { ProjectService, ProjectStageService, SteelTypeService, ProjectTypeService  } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';
import { ProjectCreateRequest } from 'src/app/models';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  projectForm: FormGroup;
  loading = false;
  submitted = false;

  stages: Stage[];
  types: Type[];
  steelTypes: steelType[];
  Project: Project;
  ProjectCreateRequest: ProjectCreateRequest;
  id: number;

  disableSteelType = null;
  disableProjectType = null;
  disableProjectStage = null;

  FRMCNTRLSteelType = 'frmSteelType';
  FRMCNTRLType = 'frmType';
  FRMCNTRLStage = 'frmStage';
  FRMCNTRLNAME = 'frmName';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private SteelTypeService: SteelTypeService,
    private ProjectTypeService: ProjectTypeService,
    private ProjectStageService: ProjectStageService,
    private alertService: AlertService,
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(this.id);
  }

  ngOnInit(): void {
 
    this.projectService.getDetailsById(this.id)
    .subscribe((result:Project) => {
      console.log(result);
      this.Project = result;
      this.projectForm.controls['frmName'].setValue(result.name);
      this.projectForm.controls['frmSteelType'].setValue(result.steelType.name);
      this.projectForm.controls['frmType'].setValue(result.type.name);
      this.projectForm.controls['frmStage'].setValue(result.stage.name);
    }, error => console.error(error));
    this.getSteelTypes();
    this.getProjectTypes();
    this.getProjectStages();

    this.projectForm = this.formBuilder.group({
      frmSteelType: ['', Validators.required],
      frmType: ['',Validators.required],
      frmStage: ['',Validators.required],
      frmName: ['', Validators.required]
    });
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

    this.Project.name = this.projectForm.controls[this.FRMCNTRLNAME].value;
    this.Project.steelType = this.projectForm.controls[this.FRMCNTRLSteelType].value;
    this.Project.type = this.projectForm.controls[this.FRMCNTRLType].value;
    this.Project.stage = this.projectForm.controls[this.FRMCNTRLStage].value;
    this.editProject();
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

  editProject(){
    this.projectService.editProject(this.Project)
    .pipe(first())
    .subscribe(projects => {
      this.router.navigate(['/project']);
    })
  }

}
