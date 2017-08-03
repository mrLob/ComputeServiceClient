import { Injectable } from '@angular/core';

import { Purchase } from './purchase';
import { PURCHASES } from './mock-purchases';

@Injectable()
export class PurchaseService{

    getPurchases(): Promise<Purchase[]>{
        return Promise.resolve(PURCHASES);
    }
    getPurchase(id: number): Promise<Purchase>{
        return this.getPurchases().then(purchases => purchases.find(purchase => purchase.id === id));
    }
    
}
