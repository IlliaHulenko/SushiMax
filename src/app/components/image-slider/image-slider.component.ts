import { Component, Input, OnInit } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-slider-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit {

  @Input() slides: SlideInterface[] = [];
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 2000;

  currentIndex: number = 0;  
  hidden:boolean = true;

  ngOnInit(): void {
    if(this.autoPlay){
      setInterval(() => {
        this.goToNext();
      }, this.autoPlaySpeed)
    }
  }

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToPrevious():void{
    const isFirstIndex = this.currentIndex === 0;
    const newIndex = isFirstIndex 
      ? this.slides.length - 1 
      : this.currentIndex - 1;
    this.currentIndex = newIndex; 
  }

  goToNext():void{
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  jumpToSlide(index: number){
    this.currentIndex = index;    
  }

}
