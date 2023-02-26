import { Component, OnInit, ViewChild } from '@angular/core';
import { RedbubbleTrend } from '../model/redbubbleTrend';
import { RedbubbleService } from '../services/redbubble.service';
import { Table } from 'primeng/table';
import { NgFor } from '@angular/common';
import { bubbleLink } from '../model/bubbleLink';



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

  rangeValues: number[] = [];
  min=0;
  max=0;
  rangeValuesC: number[] = [];
  minC=0;
  maxC=0;
  a=50;

  constructor(private redbubbleService:RedbubbleService) { }

  ngOnInit(): void {
    this.getRedbubbleTrends();
   setTimeout(() => {
     const el = document.querySelector("style[type='text/css']") as HTMLStyleElement;
     el.innerHTML="";

   }, 50);


  }
  generateTags(trend:RedbubbleTrend){
    let taglink="https://www.redbubble.com/shop/?query="+
    trend.KEYWORDS.toString().split(" ").join("+")+"&sortOrder=trending"
    console.log(taglink);
    
    let link:bubbleLink;
    link={
      url:taglink
    }
    this.redbubbleService.tagGenerator(link).subscribe(data=>{
      console.log(data);
      });
  }
  createDesign(trend:RedbubbleTrend){
  }

  getRedbubbleTrends(){
    this.redbubbleService.gettrends().subscribe(data=>{
      console.log('DATA: ',data);
      this.trends=data;
      
      
      this.trendsFiltred=[...this.trends]

      this.getMinMax(this.trends);
      this.getMinMaxCompetition(this.trends);
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
   getMinMaxCompetition(trends:RedbubbleTrend[]){
    this.minC=0;
    this.maxC=5000;
    trends.forEach(trend=>{
      if(parseInt(trend.COMPETITION)< this.minC){
        this.minC=parseInt(trend.COMPETITION);
      }
      // if(parseInt(trend.COMPETITION)> this.maxC){
      //   this.maxC=parseInt(trend.COMPETITION);
      // }
    });
    
    this.rangeValuesC = [this.minC,this.maxC];
   }

   handleChange(event:Event ){
    console.log(this.rangeValues);
    let trendsF=this.trends.filter(trend=>{
      return (trend.TREND>this.rangeValues[0] && trend.TREND<this.rangeValues[1] && parseInt(trend.COMPETITION)>this.rangeValuesC[0] && parseInt(trend.COMPETITION)<this.rangeValuesC[1]);
    })

    this.trendsFiltred=[...trendsF];
    console.log('trends : ',this.trends.length);
    console.log(this.trendsFiltred.length);
   }

  //  handleChangeC(event:Event ){
  //   console.log(this.rangeValuesC);
  //   let trendsF=this.trends.filter(trend=>{
  //     return (parseInt(trend.COMPETITION)>this.rangeValuesC[0] && parseInt(trend.COMPETITION)<this.rangeValuesC[1]);
  //   })

  //   this.trendsFiltred=[...trendsF];
  //   console.log('trends : ',this.trends.length);
  //   console.log(this.trendsFiltred.length);
    
  //  }
  } 

   




