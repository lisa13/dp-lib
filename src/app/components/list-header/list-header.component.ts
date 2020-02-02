import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  @Input() firstLabel: string;
  @Input() secondLabel: string;
  @Input() thirdLabel: string;



  ngOnInit() {
  }

}
