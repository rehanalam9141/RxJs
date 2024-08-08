import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private _designUtility:DesignUtilityService){

  }
  @ViewChild('addBtn') addBtn!:ElementRef;
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let countVal = 'Video ' + count++;
      console.log(countVal);
      this._designUtility.print(countVal, 'elContainer');
      this._designUtility.print(countVal, 'elContainer2');
    })
  }

 
}
