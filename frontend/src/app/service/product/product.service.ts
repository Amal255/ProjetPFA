import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8081/SpringMVC/servlet'; // Mettez ici l'URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits depuis le backend
  //////////////////////////
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/products`);
  }

  // Récupérer un produit par son ID depuis le backend
  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}/products/${id}`);
  }

  // Ajouter un produit en utilisant une requête POST au backend
  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiUrl}/addProduct`, product);
  }

  // Mettre à jour un produit en utilisant une requête PUT au backend
  updateProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/updateProduct/${product.id_product}`, product);
  }

  // Supprimer un produit par son ID en utilisant une requête DELETE au backend
  //deleteProduct(id: number): Observable<any> {
 //   return this.http.delete(`${this.apiUrl}/deleteProduct/${id}`);
 // }
}
