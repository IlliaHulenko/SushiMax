import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { SlideInterface } from '../../types/slide.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slidesImg:SlideInterface[]=[
    {id:0, url:'https://www.ohsushi.es/img/california-roll-623.jpg',title:'California Roll'},
    {id:1, url:'https://i.blogs.es/333801/nigiri-sushi-5/1366_2000.jpg',title:'Salmon Nigiri'},
    {id:2, url:'https://www.tiger-corporation.com/wp-content/uploads/2023/02/hero-img-recipe-tekka-maki-b2c600cf500bd3fd7f0702c5fc0e0e15.jpg',title:'Tuna Maki'},
    {id:3, url:'https://www.justonecookbook.com/wp-content/uploads/2020/12/Spicy-Tuna-Rolls-8963.jpg',title:'Spicy Tuna Roll'},
    {id:4, url:'https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg',title:'Dragon Roll'},
    {id:5, url:'https://www.clarin.com/img/2020/06/18/5L2oDs4Ey_1256x620__1.jpg',title:'Philadelphia Roll'},
  ]
}
