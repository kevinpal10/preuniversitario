import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from 'src/app/components/carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'src/app/models/data-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carouselData:ICarouselItem[]=CAROUSEL_DATA_ITEMS

  constructor() { }

  ngOnInit(): void {
  }

}
