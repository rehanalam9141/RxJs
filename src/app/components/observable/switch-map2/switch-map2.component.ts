import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';
import { Search } from '../../../Appdto/app_dto';

@Component({
  selector: 'app-switch-map2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './switch-map2.component.html',
  styleUrl: './switch-map2.component.css'
})
export class SwitchMap2Component {

  constructor(private _utilityService:DesignUtilityService) {
    
  }

  searchResult!:any
  searchResultCount!:any

  @ViewChild('searchForm') searchForm!:NgForm;

  ngAfterViewInit(): void {

   const formValue = this.searchForm.valueChanges;

   formValue?.pipe(
    //map(data=> data.searchTerm)
    //filter(()=> this.searchForm.valid),
    pluck('searchTerm'),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(data => this._utilityService.getSerches(data))
   ).subscribe(res=>{
    //console.log(res)
    this.searchResult = res
    this.searchResultCount = Object.keys(res).length;
   })
    
  }

}
