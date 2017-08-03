import { Component, OnInit } from '@angular/core';
import { RouterModule, Router }   from '@angular/router';
import { Http } from '@angular/http/';

import { Purchase } from './purchase';
import { PurchaseService } from './purchase.service'; 

@Component({
  selector: 'purchases-root',
  styleUrls: ['./purchases.component.css'],
  templateUrl:'./purchases.component.html',
  providers: [PurchaseService]
})
export class PurchasesComponent implements OnInit {
  title = 'Table of purchases';
  sum = 0;
  purchases: Purchase[];
  selectedPurchase: Purchase;
  
  constructor(
    private purchaseService: PurchaseService,
    private router: Router
  ){};

  getPurchases(): void{
    this.purchaseService.getPurchases().then(purchases => this.purchases = purchases);
  }

  onSelect(purchase: Purchase): void{
    this.selectedPurchase = purchase;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPurchase.id]);
  }

  ngOnInit(): void{
    this.getPurchases();
  }
  
}
