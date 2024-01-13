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
  selector: 'app-create-steeltype',
  templateUrl: './create-steeltype.component.html',
  styleUrls: ['./create-steeltype.component.css']
})
export class CreateSteeltypeComponent {
  steelForm: FormGroup;
  loading = false;
  submitted = false;

  Steeltype: steelType;

  disableStainless = null;
  disableHardenable = null;

  FRMCNTRLSTAINLESS = 'frmStainless';
  FRMCNTRLHARDENABLE = 'frmHardenable';
  FRMCNTRLNAME = 'frmName';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private SteelTypeService: SteelTypeService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.steelForm = this.formBuilder.group({
      frmStainless: [ true, Validators.required],
      frmHardenable: [true, Validators.required],
      frmName: ['', Validators.required]
    })
  }
  
  get f() { return this.steelForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.steelForm.invalid) {
      return;
    }
    this.loading = true;
    this.Steeltype = new steelType();

    this.Steeltype.name = this.steelForm.controls[this.FRMCNTRLNAME].value;
    this.Steeltype.stainless = this.steelForm.controls[this.FRMCNTRLHARDENABLE].value;
    this.Steeltype.hardenable = this.steelForm.controls[this.FRMCNTRLHARDENABLE].value;
    console.log(this.Steeltype);
    this.createSteelType();
  }

  createSteelType(){
    this.SteelTypeService.createSteelType(this.Steeltype)
    .pipe(first())
    .subscribe(types => {
      this.router.navigate(['/steelType']);
    })
  }
}
