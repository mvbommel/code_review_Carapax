import { Component } from '@angular/core';
import { Project }  from '../models/project'
import { ProjectService } from '../services/project.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  public projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(result => {
        this.projects = result;
        console.log(this.projects);
      }, error => console.error(error));
  }
}
