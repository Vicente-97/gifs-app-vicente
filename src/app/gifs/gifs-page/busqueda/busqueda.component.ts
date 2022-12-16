import { Component, OnInit, Input } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})
export class BusquedaComponent implements OnInit {

  constructor(private GifsSS:GifsServiceService) {
    
   }

  ngOnInit(): void {
  }

  

  busqueda(){
    let clean =this.nuevo.trim();
    if((this.GifsSS.historial.indexOf(this.nuevo)==-1)&&(this.GifsSS.historial.length<10)&&clean!==""){
      this.GifsSS.buscarGifs(this.nuevo)
      this.nuevo=""
      
    }
    
  }
   nuevo:string=""



}
