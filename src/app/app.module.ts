import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { TrendsComponent } from './trends/trends.component';
import {TableModule} from 'primeng/table';
import { TagGeneratorComponent } from './tag-generator/tag-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TrendsComponent,
    TagGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    ButtonModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
