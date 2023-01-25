import { Component, OnInit } from '@angular/core';
import { RedbubbleTrend } from '../model/redbubbleTrend';
import { RedbubbleService } from '../services/redbubble.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  trends:RedbubbleTrend[]=[];

  constructor(private redbubbleService:RedbubbleService) { }

  ngOnInit(): void {
    this.getRedbubbleTrends();
  }

  getRedbubbleTrends(){
    this.redbubbleService.gettrends().subscribe(data=>{
      console.log(data);
      this.trends=data;
    });
  }

  /* customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
} */


}
