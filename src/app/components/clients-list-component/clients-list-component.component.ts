import { HeaderService } from './../../layout/header-component/header.service';
import { ICliente } from './../../models/cliente';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-list-component',
  templateUrl: './clients-list-component.component.html',
  styleUrls: ['./clients-list-component.component.scss']
})

export class ClientsListComponentComponent implements OnInit, OnDestroy {

  listaClientes: ICliente[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private service: ClienteService,
              private headerService: HeaderService) { }


  ngOnInit(): void {

    const sub1$ = this.service.obtenerClientes().subscribe(
      result => this.listaClientes = result
    );
    this.subscriptions.push(sub1$);

    const sub2$ = this.headerService.queryChanged$.subscribe(
      queryStr => this.buscarClientePorQuery(queryStr)
    );
    this.subscriptions.push(sub2$);

    this.headerService.queryChanged$.subscribe(
        queryStr => this.buscarClientePorQuery(queryStr)
      );

    this.service.obtenerClientes().subscribe(
      result => this.listaClientes = result
    );
  }

  private buscarClientePorQuery(query: string): void {
    this.service.obtenerClientesPorQuery(query).subscribe(
      result => this.listaClientes = result
    );
  }

  onDeleteClick(cliente: ICliente): void{

      Swal.fire({
      title: 'Estas seguro que quieres eliminar el cliente?',
      text: "No podras revertir este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar cliente!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.eliminarPorId(cliente.id).subscribe(() => {

          const nuevaLista = this.listaClientes.filter(c => c.id !== cliente.id);
          this.listaClientes = [...nuevaLista];

          Swal.fire(
          'Eliminado!',
          'El cliente se ha eliminado con exito.',
          'success'
        )

      });
    }

  });
}

  ngOnDestroy(): void{
    this.subscriptions.forEach( sub => sub.unsubscribe() );
  }

}
