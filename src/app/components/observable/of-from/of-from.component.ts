import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit {

  obsMessage:any;
  constructor(private _utilityService:DesignUtilityService) {
    
  }



  ngOnInit(): void {

    //OF Example

    const Obs1 = of('Rehan','Alam','Ahmad');

    Obs1.subscribe(res=>{
      this._utilityService.print(res,'elContainer')
    })

    const Obs2 = of({a:'Rehan',b:'Alam',c:'Ahmad'});

    Obs2.subscribe(res=>{
      this.obsMessage = res;
      console.log(res)
    })

    //From Example Array
    let array = ['Html','Angular','JavaScript']
    const Obs3 = from(array);
    Obs3.subscribe(res=>{
      console.log(res)
      this._utilityService.print(res,'elContainer3')
    })

    //From Promise
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000);      
    })
    promise.then(res=>{
      console.log(res)
    })

    const Obs4 = from(promise);
    Obs4.subscribe(res=>{
      console.log('From promise =>',res)
      this._utilityService.print(res,'elContainer4')
    })

    //From String

    const Obs5 = from('Welcome to RxJs Course');
    Obs5.subscribe(res=>{
      console.log('From String =>',res)
      this._utilityService.print(res,'elContainer5')
    })

  }

}
