import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EventregpageComponent } from './eventregpage/eventregpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },

  {path : 'eventregpage',
component:EventregpageComponent},
{path : 'adminpage',
component:AdminpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
