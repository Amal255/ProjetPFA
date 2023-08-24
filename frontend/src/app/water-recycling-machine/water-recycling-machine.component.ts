import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Products } from '../models/products';


@Component({
  selector: 'app-water-recycling-machine',
  templateUrl: './water-recycling-machine.component.html',
  styleUrls: ['./water-recycling-machine.component.css'],
  providers : [ServiceService],
})
export class WaterRecyclingMachineComponent implements OnInit {

  quantity: number = 1;
  productName: string = 'The Dracoss Greywater Recycling Machine';
  productPrice : any = 'pricing information is not yet available';
  productDescription: string = 'The Dracoss Greywater Recycling Machine is a revolutionary new technology that can help you to reduce your water consumption and save money. The machine takes greywater from baths, sinks, washing machines, and other kitchen appliances, and purifies it for reuse in non-drinking applications such as irrigation, flushing toilets, and laundry. ';
  buttonIncreaseClicked = false
  buttonDecreaseClicked = false
  showTabContentFeatures: boolean = false;
  showTabContentDetails: boolean = false;
  showTabContentBenefits: boolean = false;
  activeTab: string = ''; 
  rating : number = 3.5;
  liste : Products[]=[];
  nbProduct:number=0
  constructor(private service : ServiceService) { }

  ngOnInit(): void { 
    this.service.getProducts().subscribe(products=>{
      this.liste=products
      this.nbProduct=products.length
    })
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    this.buttonDecreaseClicked = true;
    setTimeout(() => {
      this.buttonDecreaseClicked = false;
    }, 500);
  }

  increaseQuantity() {
    this.quantity++;
    this.buttonIncreaseClicked = true;
    setTimeout(() => {
      this.buttonIncreaseClicked = false;
    }, 500);
  }

  addToCart() {
    // Logique pour ajouter le produit au panier
    console.log('Product added to cart:', this.quantity);
  }


  toggleTabContentFeatures() {
    this.showTabContentFeatures = !this.showTabContentFeatures;
    this.showTabContentDetails = false
    this.showTabContentBenefits = false
  }

  toggleTabContentDetails() {
    this.showTabContentDetails = !this.showTabContentDetails;
    this.showTabContentBenefits = false
    this.showTabContentFeatures = false

  }

  toggleTabContentBenefits() {
    this.showTabContentBenefits = !this.showTabContentBenefits;
    this.showTabContentDetails = false
    this.showTabContentFeatures = false

    }



  

 

}
