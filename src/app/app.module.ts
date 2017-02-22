import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { IntoleranceComponent } from './intolerance/intolerance.component';
import { SoegningComponent } from './soegning/soegning.component';
import { VisningComponent } from './visning/visning.component';
import { VisningResolver } from './visning/visning.resolver';
import { DataService } from './data/data.service';
import { AppRoutes } from './app.routes';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(AppRoutes)],
  declarations: [ AppComponent, HomeComponent, IntoleranceComponent, SoegningComponent, VisningComponent],
  bootstrap:    [ AppComponent ],
  providers: [VisningResolver, DataService]
})
export class AppModule { }
