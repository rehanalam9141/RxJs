import { Component } from '@angular/core';
import { DesignUtilityService } from '../../../AppService/design-utility.service';
import { concatMap, delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent {

  constructor(private _utilityService:DesignUtilityService) {
    
  }

  getData(data:any){
     return of(data + ' Video uploaded').pipe(delay(2000));
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const source = from(['Tech','Comedy','News']);


    // Ex-01 Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer')
    })

    // Ex-02 Map + switchAll
    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer2')
    })

    // Ex-03 switchMap
    source.pipe(
      switchMap(res => this.getData(res)),
    ).subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer3')
    })

     // Ex-04 mergeMap
     source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer4')
    })

    // Ex-05 concatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer5')
    })

  }
}
