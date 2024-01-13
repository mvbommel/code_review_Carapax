import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { steelType } from '../models';
import { SteelTypeService } from '../services';

@Component({
  selector: 'app-steel-type',
  templateUrl: './steel-type.component.html',
  styleUrls: ['./steel-type.component.css']
})
export class SteelTypeComponent {
  public steelTypes: steelType[];

  constructor(private steelTypeService: SteelTypeService, private router: Router,) { }

  ngOnInit() {
    this.steelTypeService.getSteelTypes()
      .subscribe(result => {
        this.steelTypes = result;
        console.log(this.steelTypes);
      }, error => console.error(error));
  }

  deleteSteelType(id: Number){
    this.steelTypeService.deleteSteelType(id)
      .pipe(first())
    .subscribe(steelType => {
      this.router.navigate(['/steelType']);
    })
  }
}
