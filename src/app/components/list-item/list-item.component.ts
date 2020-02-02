import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dp-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() icon: string;
  @Input() firstLabel: string;
  @Input() secondLabel: string;
  @Input() thirdLabel: string;
  constructor() { }

  ngOnInit() {
  }

}
