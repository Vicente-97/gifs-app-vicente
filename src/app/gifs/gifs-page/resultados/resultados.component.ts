import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';
import { Gif } from '../interfaces/searchResponse.Interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',

})
export class ResultadosComponent implements OnInit {

  constructor(private gifService: GifsServiceService) { }

  ngOnInit(): void {
  }
get results():Gif[]{
  return this.gifService.results
}
}
