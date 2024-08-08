import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignUtilityService } from '../../AppService/design-utility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exlusive:boolean = false
  constructor(private _utilityService:DesignUtilityService) {

    this._utilityService.exlusive.subscribe(res=>{
      this.exlusive = res;
    })
    
  }

}
