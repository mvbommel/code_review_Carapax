import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Type } from '../models';
import { ProjectTypeService } from '../services';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.css']
})
export class ProjectTypeComponent {
  public types: Type[];

  constructor(private projectTypesService: ProjectTypeService, private router: Router,) { }

  ngOnInit() {
    this.projectTypesService.getProjectTypes()
      .subscribe(result => {
        this.types = result;
        console.log(this.types);
      }, error => console.error(error));
  }

  deleteProjectType(id: Number){
    this.projectTypesService.deleteProjectType(id)
      .pipe(first())
    .subscribe(steelType => {
      this.router.navigate(['/type']);
    })
  }
}
