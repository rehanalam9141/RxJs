import { Component } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent {



   randoName = ['Rehan','Matti','Imran','Awais','Hassan','Sohaib','khalid','touqeer',]
   constructor(private _utilityService:DesignUtilityService) {
    
   }
  ngOnInit(): void {

    const nameSorce = from(this.randoName)
    //Example-01 Take
    nameSorce.pipe(
      take(5)
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer')
    })

    //Example-02 TakeLAst
    nameSorce.pipe(
      takeLast(3)
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer2')
    })

    //Example-0 Takeuntil
    const source = interval(1000);
    let condition1 = timer(5000)
    let condition2 = fromEvent(document,'click')
    source.pipe(
      map(res => 'Number '+ res),
      takeUntil(condition2)
    ).subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer3')
    })
    
  }

}
