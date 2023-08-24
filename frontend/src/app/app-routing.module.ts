import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TapWaterFilterComponent } from './tap-water-filter/tap-water-filter.component';
import { WaterRecyclingMachineComponent } from './water-recycling-machine/water-recycling-machine.component';
import { FaqComponent } from './faq/faq.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './policies/privacy/privacy.component';
import { RefundComponent } from './policies/refund/refund.component';
import { ShippingComponent } from './policies/shipping/shipping.component';
import { TermsOfServiceComponent } from './policies/terms-of-service/terms-of-service.component';
import { InstallationGuideComponent } from './installation-guide/installation-guide.component';
import { NigelleComponent } from './nigelle/nigelle.component';
import { FigueDeBarbarieComponent } from './figue-de-barbarie/figue-de-barbarie.component';
import { ArganComponent } from './argan/argan.component';
import { NoyauxDeDattesComponent } from './noyaux-de-dattes/noyaux-de-dattes.component';
import { ParfumsComponent } from './parfums/parfums.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'blogs', component:BlogsComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:HeaderComponent},
  { path: 'login', component:LoginComponent},
  { path: 'water-tap-filter', component:TapWaterFilterComponent},
  { path: 'water-recycling-machine', component:WaterRecyclingMachineComponent},
  { path: 'faq', component:FaqComponent},
  { path: 'checkout', component:CheckoutComponent },
  { path: 'privacy-policy', component:PrivacyComponent },
  { path: 'refund-policy', component:RefundComponent },
  { path: 'shipping-policy', component:ShippingComponent },
  { path: 'terms-of-service', component:TermsOfServiceComponent },
  { path:'installation-guide', component:InstallationGuideComponent },
  { path: 'nigelle', component:NigelleComponent},
  { path: 'barbarie', component:FigueDeBarbarieComponent},
  { path: 'argan', component:ArganComponent},
  { path: 'dattes', component:NoyauxDeDattesComponent},
  { path: 'confidentialite', component:PrivacyComponent },
  { path: 'livraison', component:ShippingComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'parfums', component:ParfumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
