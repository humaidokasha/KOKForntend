import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangerCentreRoutingModule } from './danger-centre-routing.module';
import { DangerCentreScaleComponent } from './danger-centre-scale/danger-centre-scale.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DangerCentreScaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DangerCentreRoutingModule
  ]
})
export class DangerCentreModule { }
