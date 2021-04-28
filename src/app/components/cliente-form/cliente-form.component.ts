import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ICliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  cliente: ICliente = {} as ICliente;
  formCliente: FormGroup;

  constructor(private service: ClienteService,
              private router: Router) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    this.service.crearCliente(this.formCliente.value).subscribe( clienteCreado => {
       Swal.fire(
          'Exito!',
          'El cliente se ha creado con exito.',
          'success'
        ).then( () => {
          this.router.navigate(['/detalle', clienteCreado.id]);
        });
    } );
  }

  private initForm(): void{
    this.formCliente = new FormGroup({
      nombre: new FormControl(this.cliente.nombre, [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl(this.cliente.apellido, [Validators.required]),
      email: new FormControl(this.cliente.email, [Validators.required]),
      sexo: new FormControl(this.cliente.sexo, [Validators.required]),
      fechacreacion: new FormControl(this.cliente.fechacreacion, [Validators.required])
    });
  }

}
