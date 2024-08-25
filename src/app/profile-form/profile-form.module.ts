import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form.component';

@NgModule({
  declarations: [
  ProfileFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ ProfileFormComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileFormModule { }
