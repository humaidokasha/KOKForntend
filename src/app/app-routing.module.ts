import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { MainComponent } from './layout/main/main.component';
import { PrivateModule } from './private/private.module';
import { CanActivateAuthLayoutGuard } from './services/guards/can-activate-auth-layout.guard';

const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'',
    component:MainComponent,
    canActivate:[CanActivateAuthLayoutGuard],
    children:[
      {
        path: '',
        loadChildren: () => PrivateModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
