import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects} from './store';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { UserPhotoModule } from '@app/shared';
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature(effects),
    EmployeesRoutingModule,
    UserPhotoModule
  ]
})
export class EmployeesModule { }
