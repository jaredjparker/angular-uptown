import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public navItems = ['Drapes', 'Romans', 'Rods', 'Fabric', 'Gallery', 'How To']

  constructor() { }

  ngOnInit() {
  }

}
