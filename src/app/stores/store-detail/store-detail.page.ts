import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertController} from '@ionic/angular'
import { StoresService } from '../stores.service';
import { Store } from '../store.model';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})

export class StoreDetailPage implements OnInit, OnDestroy {
  loadedStore: Store;
  constructor(
    private activatedRoute:ActivatedRoute,
    private storesService:StoresService,
    private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('storeId')){
        //redirect
        this.router.navigate(['/stores']);
        return;
      }
      const storeId = paraMap.get('storeId');
      this.loadedStore = this.storesService.getStore(storeId);
    });
  }

  onDeleteStore(){
    this.alertCtrl.create({
      header:'Are you sure ?',
      message:'Do you realy want to delete the store',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'delete',
          handler: ()=>{
            this.storesService.deleteStore(this.loadedStore.id);
            this.router.navigate(['/stores']);
          }
        }
      ]
    }).then( alertEl => {
      alertEl.present();
    });
    
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
