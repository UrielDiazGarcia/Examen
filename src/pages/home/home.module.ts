import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(HomePage),
    FormsModule,
    IonicPageModule,
    
  ],
})
export class HomePageModule {}
