import { Component, OnInit } from '@angular/core';      // 6.

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {      // 6.
  constructor(){ }
  ngOnInit(): void{}

}
