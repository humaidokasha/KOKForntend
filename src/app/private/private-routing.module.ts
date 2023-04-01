import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangerCentreModule } from './danger-centre/danger-centre.module';
import { HomeComponent } from './home/home.component';
import { StressModule } from './stress/stress.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'stress',
    loadChildren: ()=>StressModule
  },
  {
    path:'dangercenter',
    loadChildren: ()=>DangerCentreModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
