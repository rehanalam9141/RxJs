import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-marge-map',
  standalone: true,
  imports: [],
  templateUrl: './marge-map.component.html',
  styleUrl: './marge-map.component.css'
})
export class MargeMapComponent {

  constructor(private _utilityService:DesignUtilityService) {
    
  }

  getData(data:any){
     return of(data + ' Video uploaded');
  }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News']);

    // Ex-01 Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer')
    })

    // Ex-02 Map + meregAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer2')
    })

    // Ex-03 mergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer3')
    })
  }

}
