import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent {

  sub!:Subscription
  sub2!:Subscription
  myColor!:string
  
  constructor(private _utilityService:DesignUtilityService) {
    
  }

  ngOnInit(): void {
    
    const source = interval(1500);
    
    //Example -01
    const array = ['Rehan','Matti','Imran','Awais','Hassan','Sohaib','khalid','touqeer',]
    
    this.sub = source.pipe(
      tap(res =>{
        //console.log('Tap before =>', res)
        if(res == 4){
          this.sub.unsubscribe()
        }
      }),
      map(res => array[res]),
      tap(res =>{
        //console.log('Tap after =>', res)
      }),
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res, 'elContainer')
    })


    //Example -02
    const color = ['Blue','green','yellow','black','pink','brown','red',]
    
    this.sub2 = source.pipe(

      tap(res =>{

        this.myColor = color[res];
        console.log('tap => '+ res)
        if(res == 7){
          this.sub2.unsubscribe()
        }
      }),
      map(res => color[res])
    ).subscribe(res=>{
      console.log(res)
      this._utilityService.print(res, 'elContainer2')
    })
  }
}
