import { Component, OnInit, ViewChild } from '@angular/core';
import { RedbubbleTrend } from '../model/redbubbleTrend';
import { RedbubbleService } from '../services/redbubble.service';
import { Table } from 'primeng/table';



@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
// lists
  trends:RedbubbleTrend[]=[];
  selectedProducts: RedbubbleTrend[]=[];
  //variables
  @ViewChild('dt')
  dt: Table | undefined;


  constructor(private redbubbleService:RedbubbleService) { }

  ngOnInit(): void {
    this.getRedbubbleTrends();
  }

  getRedbubbleTrends(){
    this.redbubbleService.gettrends().subscribe(data=>{
      console.log('DATA: ',data);
      this.trends=data;
    });
  }
  applyFilterGlobal($event:any, stringVal:string) {
    console.log('stringVal',this.dt);
    
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value.toString(), stringVal);
  }

}


