import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pushButton() {
    alert('Button pushed!');
  }

}
