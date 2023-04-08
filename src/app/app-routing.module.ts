import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TrainItemComponent } from './trains/train-item/train-item.component';
import { TrainPageComponent } from './trains/train-page/train-page.component';
import { TrainsComponent } from './trains/trains.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'trains', component: TrainsComponent},
  {path: 'trains/:id', component: TrainItemComponent},
  {path: 'buy/:id', component: TrainPageComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
