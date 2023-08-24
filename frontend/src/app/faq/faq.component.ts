import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  isAccordionExpanded: { [key: string]: boolean } = {};

  toggleAccordion(buttonId: string) {
    this.isAccordionExpanded[buttonId] = !this.isAccordionExpanded[buttonId];
  }

}
