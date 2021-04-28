import { ClienteService } from 'src/app/services/cliente.service';
import { ICliente } from './../../models/cliente';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-list-detalles',
  templateUrl: './clients-list-detalles.component.html',
  styleUrls: ['./clients-list-detalles.component.scss']
})
export class ClientsListDetallesComponent implements OnInit, OnDestroy {

  detallesClientes: ICliente;

  constructor( private activatedRoute: ActivatedRoute,
              private service: ClienteService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.obtenerPorId(params.id).subscribe( result => this.detallesClientes = result);
      console.log(params);
    });
  }

  ngOnDestroy(): void{

  }

}
