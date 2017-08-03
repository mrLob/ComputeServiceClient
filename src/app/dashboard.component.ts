import { Component, OnInit } from '@angular/core';

import { Purchase } from './purchase';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    purchases: Purchase[] = [];

    constructor(private purchaseService: PurchaseService) { }

    ngOnInit(): void{
        this.purchaseService.getPurchases()
        .then(purchases => this.purchases = purchases.slice(1,5));
    }

 }