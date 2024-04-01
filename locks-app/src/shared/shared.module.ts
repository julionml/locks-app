import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DoorOpenModalComponent } from './components/door-open-modal/door-open-modal.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
@NgModule({
  declarations: [
    DoorOpenModalComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    DoorOpenModalComponent,
    PokemonDetailsComponent
  ]
})
export class SharedModule { }
