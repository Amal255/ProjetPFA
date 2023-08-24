import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Stripe from 'stripe'; 

const stripe = new Stripe('sk_test_51N37H1A3EFDPeg9GwUBLNOHAlED8STvRSsKcD6Obpe9wZl918X1HizXE5mmwLNMueEgwabRbXHBQpFRcojgQmURn0086ERLrwI', {
  apiVersion: '2023-08-16',
});

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productName!: string ;
  productPrice!: number ;
  quantity!: number ;
  subTotal : number = 0
  total : number = 0
  buttonDecreaseClicked: boolean = false;
  buttonIncreaseClicked: boolean = false;
  isShipToDifferentAddress: boolean = false;
  produits: any[] = [];
  paymentForm: FormGroup;
  showCreditCardLogos: boolean = false;
  receivedData: string = ''; 
  stripePublicKey: string = 'YOUR_STRIPE_PUBLIC_KEY'; // Remplacez par votre clé publique Stripe
  stripe: any;
  handler: any = null;
  title = 'App';

  constructor(private elementRef: ElementRef,private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
    this.paymentForm = this.formBuilder.group({
    paymentMethod: ['']
  });}



  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.productName = params['productName'];
      this.productPrice = params['productPrice'];
      this.quantity = params['quantity'];
      this.receivedData = `${this.productName} - ${this.productPrice} - ${this.quantity}`;
    });

    const savedProducts = localStorage.getItem('cartProducts');
    if (savedProducts) {
      this.produits = JSON.parse(savedProducts);
    }
    this.loadStripe();
  }



  pay(amount: any) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: async (token: any) => {
        try {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log('1111111111', token);

          const customer = await stripe.customers.create({
            email: token.email,
            name: token.email,
          });
          console.log('customer',customer)
          
          const customerId = customer.id;

          stripe.customers.retrieve(customerId)
          .then(customer => {
            console.log('xxxxxxx',customer);
          })
          .catch(err => {
            console.log(err);
          });

          alert('Paiement réalisé avec succés!');
          const charges = await this.getPaiements(customerId);
          console.log('liste paiement', charges);
        } catch (error) {
          console.error(error);
        }
      }
    });
    const tauxDeChange = 1000; // Taux de change dinar tunisien/millime
    const montantEnMillimes = amount * 100;
    const montantEnDinarsTunisiens = montantEnMillimes / tauxDeChange;
    handler.open({
      name: 'Paiement',
      description: '',
      amount: montantEnMillimes,
      panelLabel: 'Payer {{amount}}',
      locale: 'auto',
      currency: 'TND',
      closed: () => {
        // Code à exécuter lorsque la boîte de dialogue est fermée
      }
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: (token: any) => {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log('222222222', token);
            alert('Payment Success!!');
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }

  async getPaiements(userId: string) {
    const charges = await stripe.charges.list({ customer: userId });
    return charges.data;
  }



  calculateSubTotal(): number {
    let subTotal = 0;
    for (const produit of this.produits) {
      subTotal += produit.subTotal;
    }
    return subTotal;
  }

  calculateTotal(): number {
    const subTotal = this.calculateSubTotal();
    const shippingCost = 0; // Mettez ici le coût de livraison si nécessaire
    return subTotal + shippingCost;
  }
  onCheckboxChange() {
    console.log('Checkbox selection changed. New value:', this.isShipToDifferentAddress);
    // Autres actions à effectuer en fonction de l'état de la sélection du checkbox
  }
  
  onPaymentMethodPaypal(){
    this.paymentForm.value.paymentMethod = 'paypal'
  }
  onPaymentMethodChange() { 
    const selectedValue = this.paymentForm.value.paymentMethod;
    this.showCreditCardLogos = (selectedValue === 'credit-card');
  }

  addToCart(productName: string, productPrice: number, quantity: number) {
    const newProduct = {
      productName: productName,
      productPrice: productPrice,
      quantity: quantity,
      subTotal: productPrice * quantity
    };
    
    this.produits.push(newProduct);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cartProducts', JSON.stringify(this.produits));
  }

  decreaseQuantity(index: number) {
    if (this.produits[index].quantity > 1) {
      this.produits[index].quantity--;
    }
    this.updateTotal(index);
  }

  increaseQuantity(index: number) {
    this.produits[index].quantity++;
    this.updateTotal(index);
  }

  updateTotal(index: number) {
    this.produits[index].subTotal = this.produits[index].quantity * this.produits[index].productPrice;
    this.updateLocalStorage();
  }

  deleteProduct(index: number) {
    this.produits.splice(index, 1);
    this.updateLocalStorage();
  }
 



}
