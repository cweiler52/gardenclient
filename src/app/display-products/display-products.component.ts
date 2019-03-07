import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  plants = [];

  constructor(private dbService: DatabaseService ){}
  
  ngOnInit() {
    this.getProducts();
  }
  
  getProducts() : void {
    this.dbService.getPlants().subscribe(Plants => {
      this.plants = Plants;
    })
  }
}