import { Component } from '@angular/core';
import { DesignUtilityService } from '../../AppService/design-utility.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

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
