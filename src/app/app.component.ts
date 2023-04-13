import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // kommt von angular libary und wird ganz am anfag ausgeführt
  images = ['food.jpg', 'playground.jpg', 'work.jpg'];
  currentImage = 0; 
  showImage = true; 

  ngOnInit() {
    this.updateImage(); 
    
  }
  updateImage(){ 
    setInterval(()=>{
      this.currentImage ++; // soll alle 8 sek. hochzählen
      this.currentImage = this.currentImage % this.images.length; // Modulu Rest ab 3. Bild also 0, 1 2
      this.showImage = false; // Bild entfernen

        setTimeout(() => {    // nach 10  Millisekunden wieder anzeigen
          this.showImage = true;
        }, 10);
    },7000);
  }
}
