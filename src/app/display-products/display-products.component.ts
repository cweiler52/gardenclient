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
  public _auth: boolean = false;

  ngOnInit() {
    this._auth = localStorage.getItem('token') ? true : false;
    this.getProducts();
  }
  
  getProducts() : void {
    this.dbService.getPlants().subscribe(Plants => {
      this.plants = Plants;
    })
  }

  onDeletePlant(id) {
    //console.log('delete plant id: '+id)
    this.dbService.deletePlant(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.getProducts();
  }
}