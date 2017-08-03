import { Component, Input , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'purchase-detail',
  styleUrls: ['./purchase-detail.component.css'],
  templateUrl:'./purchase-detail.component.html'
})
export class PurchaseDetailComponent implements OnInit {
  constructor(
    private purchaseService: PurchaseService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  @Input() purchase: Purchase;

  ngOnInit(): void{
    this.route.paramMap
    .switchMap(( params: ParamMap ) =>
     this.purchaseService.getPurchase( +params.get('id') ))
     .subscribe(purchase => this.purchase = purchase);
  }
  goBack(): void {
    this.location.back();
  }
}