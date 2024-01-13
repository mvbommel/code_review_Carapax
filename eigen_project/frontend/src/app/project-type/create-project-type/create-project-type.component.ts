import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Type } from 'src/app/models';
import { AlertService, ProjectTypeService } from 'src/app/services';

@Component({
  selector: 'app-create-project-type',
  templateUrl: './create-project-type.component.html',
  styleUrls: ['./create-project-type.component.css']
})
export class CreateProjectTypeComponent {
  TypeForm: FormGroup;
  loading = false;
  submitted = false;

  Type: Type;

  disableStainless = null;
  disableHardenable = null;

  FRMCNTRLSTAINLESS = 'frmStainless';
  FRMCNTRLHARDENABLE = 'frmHardenable';
  FRMCNTRLNAME = 'frmName';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectStageService: ProjectTypeService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.TypeForm = this.formBuilder.group({
      frmName: ['', Validators.required]
    })
  }
  
  get f() { return this.TypeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.TypeForm.invalid) {
      return;
    }
    this.loading = true;
    this.Type = new Type();

    this.Type.name = this.TypeForm.controls[this.FRMCNTRLNAME].value;
    console.log(this.Type);
    this.createSteelType();
  }

  createSteelType(){
    this.projectStageService.createProjectType(this.Type)
    .pipe(first())
    .subscribe(types => {
      this.router.navigate(['/type']);
    })
  }
}
