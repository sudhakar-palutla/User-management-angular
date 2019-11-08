import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatButtonModule,
        MatToolbarModule} from '@angular/material';
        

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,MatToolbarModule

  ],
  exports:[
    MatCardModule,MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,MatToolbarModule
  ]
})
export class MaterialModule { }
