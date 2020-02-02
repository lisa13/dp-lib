import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-menu-list-heading',
  templateUrl: './menu-list-heading.component.html',
  styleUrls: ['./menu-list-heading.component.scss']
})
export class MenuListHeadingComponent implements OnInit {
  @Input() heading: string;

  constructor() { }

  ngOnInit() {
  }

}
