import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { TestComponent } from './test/test.component';
import { TrendsComponent } from './trends/trends.component';

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
      },
      {
        path: 'redbubbletest', component: TestComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
