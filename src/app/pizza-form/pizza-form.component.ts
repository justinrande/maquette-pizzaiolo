import { AllergenesComponent } from './../allergenes/allergenes.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaillesComponent } from '../tailles/tailles.component';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss'],
})
export class PizzaFormComponent implements OnInit {
  ingredients = [
    {
      image: '../../assets/cheese.png',
      name: 'Fromage',
      price: '1€',
    },
    {
      image: '../../assets/mushroom.png',
      name: 'Champignons',
      price: '1€',
    },
    {
      image: '../../assets/ham.png',
      name: 'Jambon',
      price: '1,50€',
    },
    {
      image: '../../assets/onion.png',
      name: 'Oignon',
      price: '0,50€',
    },
    {
      image: '../../assets/pepperoni.png',
      name: 'Chorizo',
      price: '0,50€',
    },
    {
      image: '../../assets/pepper.png',
      name: 'Poivron',
      price: '0,50€',
    },
  ];

  selectedItems: string[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  toggle(item: string) {
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter((s) => s !== item);
    } else {
      this.selectedItems.push(item);
    }
  }

  isSelected(item: string) {
    return this.selectedItems.includes(item);
  }

  openDialog(): void {
    this.dialog.open(AllergenesComponent);
  }

  openDialogTailles(): void {
    this.dialog.open(TaillesComponent);
  }

}
