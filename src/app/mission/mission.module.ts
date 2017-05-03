import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionListComponent } from './mission-list/mission-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MissionListComponent],
  exports: [ MissionListComponent ]
})
export class MissionModule { }
