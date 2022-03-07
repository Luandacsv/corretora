import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
import { CarteiraService } from 'src/app/services/carteira.service';



@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss']
})

export class CarteiraComponent {


  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;



  constructor( private CarteiraService: CarteiraService) {}

  get single() {
    return this.CarteiraService.porcentagemData;
  }

  onResetar() {
    this.CarteiraService.resetar();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}






