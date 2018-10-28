import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { ReviewingComponent } from './reviewing/reviewing.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'imageDetails/:id',component:ReviewingComponent}
    ])
  ],
  declarations: [ImagesComponent, ReviewingComponent]
})
export class ViewModule { }
