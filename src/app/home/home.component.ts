import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public containerHeight: number;

  constructor() { }

  ngOnInit() {
    this.containerHeight = window.innerHeight;
  }

}
