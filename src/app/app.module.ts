import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AllergenesComponent } from './allergenes/allergenes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PrixPizzaComponent } from './prix-pizza/prix-pizza.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { TaillesComponent } from './tailles/tailles.component';

@NgModule({
  declarations: [AppComponent, PizzaFormComponent, AllergenesComponent, PrixPizzaComponent, TaillesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
