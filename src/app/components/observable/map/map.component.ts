import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
 //Subscription
  sub1!:Subscription;
  sub2!:Subscription;

//Messages
  message1:any;
  message2:any;
  message3:any;

  constructor(private _utilityService:DesignUtilityService) {
    
  }

  ngOnInit(): void {

    const broadCastVideos = interval(1000);


    //Example-01
      this.sub1 = broadCastVideos.pipe(
      map(data=> 'Video '+ data)
    ).subscribe(res =>{
      //console.log(res)
      this.message1 = res
    })

    setTimeout(() => {
      this.sub1.unsubscribe()
      
    }, 10000);


    //Example-2
    this.sub2 = broadCastVideos.pipe(
      map(data=> data * 3)
    ).subscribe(res=>{
      //console.log(res)
      this.message2 = res
    })
    setTimeout(() => {
      this.sub2.unsubscribe()
      
    }, 10000);


    //Example-3

    const members = from([
      { id: 1, name: 'Angular' },
      { id: 2, name: 'HTML' },
      { id: 3, name: 'Css' },
      { id: 4, name: 'java' },
      { id: 5, name: 'Csharp' },
      { id: 6, name: 'React' },
      { id: 7, name: 'Jquery' },
      { id: 8, name: 'ionic' },
    ])

    members.pipe(
      map(data=> data.name)
    ).subscribe(res=>{
      //console.log(res)
      this._utilityService.print(res,'elContainer')
    })
    
  }

}
