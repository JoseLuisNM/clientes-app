import { ICliente } from './../../models/cliente';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clients-list-detalles',
  templateUrl: './clients-list-detalles.component.html',
  styleUrls: ['./clients-list-detalles.component.scss']
})
export class ClientsListDetallesComponent implements OnInit, OnDestroy {

  @Input() detallesClientes: ICliente;

  constructor() {

   }

  ngOnInit(): void {
        console.log(this.detallesClientes);
  }

  ngOnDestroy(): void{

  }

}
