import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tap-water-filter',
  templateUrl: './tap-water-filter.component.html',
  styleUrls: ['./tap-water-filter.component.css']
})
export class TapWaterFilterComponent implements OnInit {
  quantity: number = 1;
  productName: string = 'The Dracoss Water Purifier Filter';
  productPrice: number = 35;
  productDescription: string = 'The Dracoss Water Tap Purifier is a revolutionary device designed to transform your regular tap water into clean, safe, and great-tasting water. Powered by an advanced filtration technology, it effectively reduces common contaminants like chlorine, heavy metals, bacteria, and sediments, while retaining beneficial minerals.';
  buttonIncreaseClicked = false
  buttonDecreaseClicked = false
  showTabContentFeatures: boolean = false;
  showTabContentDetails: boolean = false;
  showTabContentTechnicalOverview: boolean = false;
  showTabContentShipping: boolean = false
  activeTab: string = ''; 
  rating : number = 3.5;
  selectedColor!: string;

  selectedImageIndex: number = 0;
  selectedImage: string = "../../assets/images/product/waterPurifierFilter.png";
  imageList: string[] = [
    "../../assets/images/product/WaterPurifierFilter2.png",
    "../../assets/images/product/WaterPurifierFilter3.jpg",
    "../../assets/images/product/WaterPurifierFilter4.jpg",
    // Ajoutez plus de chemins d'accès d'images si nécessaire
  ];
  
  isImageZoomed: boolean = false;
  zoomStartPosition: { x: number, y: number } = { x: 0, y: 0 };
  dragStartPosition: { x: number, y: number } = { x: 0, y: 0 };

  
  constructor(private router : Router) { }

  ngOnInit(): void { 
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  startDrag(event: MouseEvent) {
    if (this.isImageZoomed) {
      this.zoomStartPosition = { x: event.clientX, y: event.clientY };
      this.dragStartPosition = { x: event.clientX, y: event.clientY };
    }
  }
  
  doDrag(event: MouseEvent) {
    if (this.isImageZoomed) {
      const deltaX = event.clientX - this.dragStartPosition.x;
      const deltaY = event.clientY - this.dragStartPosition.y;
  
      // Effectuer des calculs pour ajuster le zoom en fonction du mouvement
      // Utilisez deltaX et deltaY pour modifier la taille ou la position de l'image selon vos besoins
      // Par exemple : this.zoomedSize = this.originalSize + (deltaX * 0.1);
  
      // Mettre à jour la position de départ pour le prochain mouvement
      this.dragStartPosition = { x: event.clientX, y: event.clientY };
    }
  }
  
  endDrag() {
    if (this.isImageZoomed) {
      // Effectuez les actions nécessaires à la fin du glissement, si nécessaire
    }
  }


  updateSelectedImage(imageIndex: number) {
    const tempImage = this.imageList[this.selectedImageIndex];
    this.imageList[this.selectedImageIndex] = this.selectedImage;
    this.selectedImage = tempImage;
    this.selectedImageIndex = imageIndex;
    
    this.isImageZoomed = false; // Réinitialiser l'état du zoom de l'image lors du changement
  }
  toggleImageZoom() {
    this.isImageZoomed = !this.isImageZoomed;
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
    this.router.navigate(['/checkout'], { queryParams: { productName: this.productName, productPrice: this.productPrice, quantity: this.quantity } });
  }


  toggleTabContentFeatures() {
    this.showTabContentFeatures = !this.showTabContentFeatures;
    this.showTabContentDetails = false
    this.showTabContentTechnicalOverview = false
    this.showTabContentShipping = false
  }

  toggleTabContentShipping() {
    this.showTabContentShipping = !this.showTabContentShipping;
    this.showTabContentDetails = false
    this.showTabContentTechnicalOverview = false
    this.showTabContentFeatures = false
  }

  toggleTabContentDetails() {
    this.showTabContentDetails = !this.showTabContentDetails;
    this.showTabContentTechnicalOverview = false
    this.showTabContentFeatures = false
    this.showTabContentShipping = false

  }

  toggleTabContentTechnicalOverview() {
    this.showTabContentTechnicalOverview = !this.showTabContentTechnicalOverview;
    this.showTabContentDetails = false
    this.showTabContentFeatures = false
    this.showTabContentShipping = false

    }




}
