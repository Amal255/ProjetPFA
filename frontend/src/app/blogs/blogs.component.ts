import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../service/blog-service.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  liste : Blog[]=[];
  nbProduct:number=0

  constructor(private service : BlogServiceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(blogs=>{
      this.liste=blogs
      this.nbProduct=blogs.length
    })
  }

}
