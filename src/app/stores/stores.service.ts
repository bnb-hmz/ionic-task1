import { Injectable } from '@angular/core';
import { Store } from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private stores: Store[] = [
    {
      id:'s1',
      name:'store1',
      wilaya:'algiers',
      city:'Cheraga',
      latitude: 36.7589451,
      longitude:2.9454588
    },
    {
      id:'s2',
      name:'store2',
      wilaya:'algiers',
      city:'Zeralda',
      latitude: 36.7123553,
      longitude:2.8409208
    }
  ]

  constructor() { }
  getAllStores(){
    return [...this.stores]
  }
  getStore(storeId: string){
    return {...this.stores.find(store => {
      return store.id === storeId;
    })};
  }

  deleteStore(storeId:string){
    this.stores = this.stores.filter(store => {
      return store.id !== storeId;
    });
  }

}
