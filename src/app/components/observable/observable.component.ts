import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [RouterOutlet,MapComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

}
