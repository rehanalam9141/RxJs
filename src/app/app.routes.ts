import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ListComponent } from './components/list/list.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { CustomObservableComponent } from './components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './components/observable/map/map.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { TakeComponent } from './components/observable/take/take.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { DebounceTimeComponent } from './components/observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { ReplaySubjectComponent } from './components/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/observable/async-subject/async-subject.component';

export const routes: Routes = [
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'promise', component:PromiseComponent},
    { path:'async-await', component:AsyncAwaitComponent},
    { path:'observable', component:ObservableComponent, children:[
        { path:'', component:ListComponent },
        { path:'formEvent', component:FromEventComponent },
        { path:'interval', component:IntervalComponent },
        { path:'of-from', component:OfFromComponent },
        { path:'to-array', component:ToArrayComponent },
        { path:'custom-observable', component:CustomObservableComponent },
        { path:'map', component:MapComponent },
        { path:'pluck', component:PluckComponent },
        { path:'filter', component:FilterComponent },
        { path:'tap', component:TapComponent },
        { path:'take', component:TakeComponent },
        { path:'retry', component:RetryComponent },
        { path:'debounce-time', component:DebounceTimeComponent },
        { path:'subject', component:SubjectComponent },
        { path:'replay-subject', component:ReplaySubjectComponent },
        { path:'async-subject', component:AsyncSubjectComponent },
    ]},
    { path:'**', component:HomeComponent},
];
