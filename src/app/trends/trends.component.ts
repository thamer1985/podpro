import { Component, OnInit, ViewChild } from '@angular/core';
import { RedbubbleTrend } from '../model/redbubbleTrend';
import { RedbubbleService } from '../services/redbubble.service';
import { Table } from 'primeng/table';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
// lists
  trends:RedbubbleTrend[]=[];
  trendsFiltred:RedbubbleTrend[]=[];
  selectedProducts: RedbubbleTrend[]=[];
  //variables
  
  @ViewChild('dt')
  dt: Table | undefined;

  h='hydro';
  rangeValues: number[] = [];
  min=0;
  max=0;

  constructor(private redbubbleService:RedbubbleService) { }

  ngOnInit(): void {
    this.getRedbubbleTrends();
    
 
     
  }

  getRedbubbleTrends(){
    this.redbubbleService.gettrends().subscribe(data=>{
      console.log('DATA: ',data);
      this.trends=data;
      this.trendsFiltred=[...this.trends]
      let a=document.querySelector('card');
      console.log(a?.innerHTML);
      this.getMinMax(this.trends);
    });
  }
  applyFilterGlobal($event:any, stringVal:string) {
    console.log('stringVal',this.dt);
    
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value.toString(), stringVal);
  }
   getMinMax(trends:RedbubbleTrend[]){
    this.min=0;
    this.max=0;
    trends.forEach(trend=>{
      if(trend.TREND< this.min){
        this.min=trend.TREND;
      }
      if(trend.TREND> this.max){
        this.max=trend.TREND;
      }
     
      
      
    });
    
    this.rangeValues = [this.min,this.max];
   }
   handleChange(event:Event ){
    console.log(this.rangeValues);
    let trendsF=this.trends.filter(trend=>{
      return (trend.TREND>this.rangeValues[0] && trend.TREND<this.rangeValues[1]);
    })

    this.trendsFiltred=[...trendsF];
    console.log('trends : ',this.trends.length);
    console.log(this.trendsFiltred.length);
    
   }
  } 

   




