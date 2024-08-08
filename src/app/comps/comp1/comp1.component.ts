import { Component } from '@angular/core';
import { DesignUtilityService } from '../../AppService/design-utility.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  userName!:string;
  constructor(private _utilityService:DesignUtilityService) {
    this._utilityService.userName.subscribe(res=>{
      this.userName = res
    })
  }

  onChange(uname:any){
    console.log(uname.value)
    this._utilityService.userName.next(uname.value)
  }
}
