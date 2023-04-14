import { Component, OnInit, Input } from '@angular/core';      // 6. // 11. 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {      // 6.
  @Input()darkMode = true;                       // 11.                            
  constructor(){ }

  ngOnInit(): void{
  }

}
