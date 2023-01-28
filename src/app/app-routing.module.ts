import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { TrendsComponent } from './trends/trends.component';
import { TagGeneratorComponent } from './tag-generator/tag-generator.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: LandingComponent
      },
      {
        path: 'redbubbletrends', component: TrendsComponent
      }
      ,
      {
        path: 'taggenerator', component: TagGeneratorComponent
      }
      
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
