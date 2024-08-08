import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {

  constructor(private _utilityService:DesignUtilityService) {
    
  }
  getData(data:any){
    return of(data + ' Video uploaded').pipe(delay(2000));
 }
  ngOnInit(): void {
    
    const source = from(['Tech','Comedy','News']);

    //Ex-01 Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer')
    })

    //Ex-02 mergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer2')
    })

    //Ex-03 concatmap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer3')
    })
  }
}
