import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoresService } from './stores.service';
import { Store } from './store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit, OnDestroy {
  
  stores: Store[];
  constructor(private storesService:StoresService) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.stores);
    
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter from stores page');
    this.stores = this.storesService.getAllStores();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter from stores page');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave from stores page');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave from stores page');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy from sotres page');
  }

}
