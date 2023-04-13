import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['food.jpg', 'playground.jpg', 'work.jpg'];  // 1. kommt von angular libary und wird ganz am anfag ausgeführt
  headlines = [                               // 3. 
    
    'Bring engineering to the next level', 
    'Born to code', 
    'Graduated at FOM'
  ];
  currentImage = 0; 
  showImage = true; 

  ngOnInit() {
    this.updateImage(); 
  }

  updateImage(){ 
    setInterval(()=>{
      this.currentImage ++; // 1. soll alle 8 sek. hochzählen
      this.currentImage = this.currentImage % this.images.length; // 1. Modulu Rest ab 3. Bild also 0, 1 2
      this.showImage = false; // 1. Bild entfernen

        setTimeout(() => {    // 1. nach 10  Millisekunden wieder anzeigen
          this.showImage = true;
        }, 10);
    },7000);
  }
}
