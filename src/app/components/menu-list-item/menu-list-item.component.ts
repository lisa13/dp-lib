import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() rout: string;

  constructor() { }

  ngOnInit() {
  }

}
