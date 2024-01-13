import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Stage } from '../models';
import { ProjectStageService } from '../services';

@Component({
  selector: 'app-project-stage',
  templateUrl: './project-stage.component.html',
  styleUrls: ['./project-stage.component.css']
})
export class ProjectStageComponent {
  public Stages: Stage[];

  constructor(private projectStageService: ProjectStageService, private router: Router,) { }

  ngOnInit() {
    this.projectStageService.getProjectStages()
      .subscribe(result => {
        this.Stages = result;
        console.log(this.Stages);
      }, error => console.error(error));
  }

  deleteProjectStage(id: Number){
    this.projectStageService.deleteProjectStage(id)
      .pipe(first())
    .subscribe(steelType => {
      this.router.navigate(['/stage']);
    })
  }
}
