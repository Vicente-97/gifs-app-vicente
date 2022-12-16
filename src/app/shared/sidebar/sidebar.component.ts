import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs/gifs-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent implements OnInit {
  nuevo:string=""
  constructor(private GifsSS:GifsServiceService) { 
    let history : String [] = GifsSS.historial;
  }

  get history():string[]{
    return this.GifsSS.historial;
  }

  ngOnInit(): void {
  }

busqueda(gif:string){
   this.GifsSS.buscarGifs(gif)
  }

}
