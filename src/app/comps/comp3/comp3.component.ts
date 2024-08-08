import { Component } from '@angular/core';
import { DesignUtilityService } from '../../AppService/design-utility.service';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {

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
