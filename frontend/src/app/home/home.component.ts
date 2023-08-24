import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   showClients=true;
   showDistributors=false;
   showMedia=false;
   showPartners=false;
   clientStyle = "display: block;"
   distributorStyle = "display: none;"
   mediaStyle = "display: none;"
   partnerStyle = "display: none;"

  constructor() { }

  ngOnInit(): void {
  }

  onClickClients(){
    this.showClients = true;
    this.showDistributors= false;
    this.showMedia= false;
    this.showPartners=false;
    this.clientStyle = "display: block;";
    this.distributorStyle = "display: none;";
    this.mediaStyle = "display: none;";
    this.partnerStyle = "display: none;";
  }
  onClickDistributors(){
    this.showClients = false;
    this.showDistributors= true;
    this.showMedia= false;
    this.showPartners=false;
    this.clientStyle = "display: none;";
    this.distributorStyle = "display: block;";
    this.mediaStyle = "display: none;";
    this.partnerStyle = "display: none;";
  }
  onClickMedia(){
    this.showClients = false;
    this.showDistributors= false;
    this.showMedia= true;
    this.showPartners=false;
    this.clientStyle = "display: none;";
    this.distributorStyle = "display: none;";
    this.mediaStyle = "display: block;";
    this.partnerStyle = "display: none;";
  }
  onClickPartners(){
    this.showClients = false;
    this.showDistributors= false;
    this.showMedia= false;
    this.showPartners=true;
    this.clientStyle = "display: none;";
    this.distributorStyle = "display: none;";
    this.mediaStyle = "display: none;";
    this.partnerStyle = "display: block;";
  }

}
