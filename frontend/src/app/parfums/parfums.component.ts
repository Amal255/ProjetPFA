import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css']
})
export class ParfumsComponent implements OnInit {
  produits: any[] = []; // Déclaration de la propriété produits
  quantityToAddProduct1: number = 1;
  quantityToAddProduct2: number = 1;
  quantityToAddProduct3: number = 1;
  quantityToAddProduct4: number = 1;
  quantityToAddProduct5: number = 1;
  quantityToAddProduct6: number = 1;
  quantityToAddProduct7: number = 1;
  quantityToAddProduct8: number = 1;
  quantityToAddProduct9: number = 1;
  quantityToAddProduct10: number = 1;
  quantityToAddProduct11: number = 1;
  quantityToAddProduct12: number = 1;
  
   // Déclaration de la propriété quantityToAdd avec une valeur par défaut

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(productName: string, productPrice: number, quantity: number) {
    const newProduct = {
      productName: productName,
      productPrice: productPrice,
      quantity: quantity,
      subTotal: productPrice * quantity
    };
    
    this.produits.push(newProduct);
    this.updateLocalStorage(); // Mettre à jour le localStorage après avoir ajouté un produit
  }

  // ... Autre code

  // Méthode pour mettre à jour le localStorage avec les produits actuels du panier
  updateLocalStorage() {
    localStorage.setItem('cartProducts', JSON.stringify(this.produits));
  }

}
