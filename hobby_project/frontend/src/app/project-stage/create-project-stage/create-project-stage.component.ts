import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Stage } from 'src/app/models';
import { AlertService, ProjectStageService } from 'src/app/services';

@Component({
  selector: 'app-create-project-stage',
  templateUrl: './create-project-stage.component.html',
  styleUrls: ['./create-project-stage.component.css']
})
export class CreateProjectStageComponent {
  StageForm: FormGroup;
  loading = false;
  submitted = false;

  Stage: Stage;

  disableStainless = null;
  disableHardenable = null;

  FRMCNTRLSTAINLESS = 'frmStainless';
  FRMCNTRLHARDENABLE = 'frmHardenable';
  FRMCNTRLNAME = 'frmName';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectStageService: ProjectStageService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.StageForm = this.formBuilder.group({
      frmStainless: [ true, Validators.required],
      frmHardenable: [true, Validators.required],
      frmName: ['', Validators.required]
    })
  }
  
  get f() { return this.StageForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.StageForm.invalid) {
      return;
    }
    this.loading = true;
    this.Stage = new Stage();

    this.Stage.name = this.StageForm.controls[this.FRMCNTRLNAME].value;
    console.log(this.Stage);
    this.createSteelType();
  }

  createSteelType(){
    this.projectStageService.createProjectStage(this.Stage)
    .pipe(first())
    .subscribe(types => {
      this.router.navigate(['/type']);
    })
  }
}
