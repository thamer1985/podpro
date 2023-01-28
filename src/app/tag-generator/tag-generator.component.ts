import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-generator',
  templateUrl: './tag-generator.component.html',
  styleUrls: ['./tag-generator.component.scss']
})
export class TagGeneratorComponent implements OnInit {

  trend='stranger things';
  constructor() { }

  ngOnInit(): void {
  }

}
