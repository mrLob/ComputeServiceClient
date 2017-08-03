import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './purchases.component';
import { PurchaseDetailComponent } from './purchase-detail.component';
import { PurchaseService } from './purchase.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PurchasesComponent,
    PurchaseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PurchaseService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
