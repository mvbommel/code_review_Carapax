import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ProjectService } from 'src/app/services';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  public project : Project;
  returnUrl: string;
  id: number;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,) {

    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(this.id);

    this.projectService.getDetailsById(this.id)
      .subscribe(result => {
        this.project = result;
      }, error => console.error(error));
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  deleteProject(){
    this.projectService.deleteProject(this.id)
      .pipe(first())
    .subscribe(projects => {
      this.router.navigate(['/project']);
    })
  }
}
