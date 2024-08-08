import { Component } from '@angular/core';
import { DesignUtilityService } from '../../../AppService/design-utility.service';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-marge',
  standalone: true,
  imports: [],
  templateUrl: './marge.component.html',
  styleUrl: './marge.component.css'
})
export class MargeComponent {
  constructor(private _utilityService:DesignUtilityService) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const sourceTech = interval(3000).pipe( map( v=> 'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(6000).pipe( map( v=> 'Comedy Video #'+ (v+1)),take(4));
    const sourceNews = interval(3500).pipe( map( v=> 'News Video #'+ (v+1)),take(4));

    const FinalObs = merge(sourceTech,sourceComedy,sourceNews)

    FinalObs.subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer')
    })
  }
}
