import { Component } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-concat',
  standalone: true,
  imports: [],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css'
})
export class ConcatComponent {

  constructor(private _utilityService:DesignUtilityService) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const sourceTech = interval(1000).pipe( map( v=> 'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(1000).pipe( map( v=> 'Comedy Video #'+ (v+1)),take(4));
    const sourceNews = interval(1000).pipe( map( v=> 'News Video #'+ (v+1)),take(4));

    const FinalObs = concat(sourceTech,sourceComedy,sourceNews)

    FinalObs.subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer')
    })
  }

}
