import { Component, OnInit } from '@angular/core';
import { bubbleLink } from '../model/bubbleLink';
import { RedbubbleService } from '../services/redbubble.service';

@Component({
  selector: 'app-tag-generator',
  templateUrl: './tag-generator.component.html',
  styleUrls: ['./tag-generator.component.scss']
})
export class TagGeneratorComponent implements OnInit {

  trend='stranger things';
  constructor(private redbubbleService:RedbubbleService) { }

  ngOnInit(): void {
    this.scrapeData();
  }

  scrapeData(){

  // this.redbubbleService.getusers().subscribe(data=>{
  //   console.log(data);
  //   });
  let link:bubbleLink={
    url:"https://www.redbubble.com/shop/?query=wednesday"
  };
  
  this.redbubbleService.tagGenerator(link).subscribe(data=>{
    console.log(data);
    });
  }
}

