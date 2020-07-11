import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {ViewChild, ElementRef} from '@angular/core'

declare var google: any;

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  map: any;
  infoWindows: any[];
  markers: any = [
    {
      title: "Cheraga",
      latitude: 36.7589451,
      longitude: 2.9454588
    },
    {
      title: "Zeralda",
      latitude: 36.7123553,
      longitude: 2.8409208
    },
    {
      title: "N11, Zeralda",
      latitude: 36.712355,
      longitude: 2.840921
    },
    {
      title: "Staouali",
      latitude: 36.7576207,
      longitude: 2.8908112
    },
    {
      title: "Bouchaoui",
      latitude: 36.7454032,
      longitude: 2.9127722
    }
  ]

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private menuCtrl: MenuController) { }
  
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }

  showMap(){
    const location = new google.maps.LatLng(36.7123553, 2.8409208);  //-34.397, lng: 150.644
    const options = {
      center: location,
      zoom: 15,
      desableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude)
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      })
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">'+
                            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>'+
                            '<p>Latitude: '+ marker.latitude + '</p>'+
                            '<p>Longitude: '+ marker.longitude + '</p>'+
                            '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);                     
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

}
