import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TapWaterFilterComponent } from './tap-water-filter/tap-water-filter.component';
import { WaterRecyclingMachineComponent } from './water-recycling-machine/water-recycling-machine.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './policies/privacy/privacy.component';
import { RefundComponent } from './policies/refund/refund.component';
import { ShippingComponent } from './policies/shipping/shipping.component';
import { TermsOfServiceComponent } from './policies/terms-of-service/terms-of-service.component';
import { HttpClientModule } from '@angular/common/http';
import { InstallationGuideComponent } from './installation-guide/installation-guide.component';
import { ArganComponent } from './argan/argan.component';
import { NigelleComponent } from './nigelle/nigelle.component';
import { NoyauxDeDattesComponent } from './noyaux-de-dattes/noyaux-de-dattes.component';
import { FigueDeBarbarieComponent } from './figue-de-barbarie/figue-de-barbarie.component';
import { ParfumsComponent } from './parfums/parfums.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    BlogsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TapWaterFilterComponent,
    WaterRecyclingMachineComponent,
    FaqComponent,
    CheckoutComponent,
    PrivacyComponent,
    RefundComponent,
    ShippingComponent,
    TermsOfServiceComponent,
    InstallationGuideComponent,
    ArganComponent,
    NigelleComponent,
    NoyauxDeDattesComponent,
    FigueDeBarbarieComponent,
    ParfumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
