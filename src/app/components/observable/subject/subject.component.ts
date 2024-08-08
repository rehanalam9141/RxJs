import { Component } from '@angular/core';
import { DesignUtilityService } from '../../../AppService/design-utility.service';
import { Comp2Component } from "../../../comps/comp2/comp2.component";
import { Comp3Component } from "../../../comps/comp3/comp3.component";
import { Comp1Component } from "../../../comps/comp1/comp1.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [Comp2Component, Comp3Component, Comp1Component],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  userName!:string;

  constructor(private _utilityService:DesignUtilityService) {
    this._utilityService.exlusive.next(true)
    this._utilityService.userName.subscribe(res=>{
      this.userName = res
    })
  }

  ngOnDestroy(): void {
    this._utilityService.exlusive.next(false)
    
  }

}
