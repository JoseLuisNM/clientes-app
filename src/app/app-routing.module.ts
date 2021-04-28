import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClientsListDetallesComponent } from './components/clients-list-detalles/clients-list-detalles.component';
import { ClientsListComponentComponent } from './components/clients-list-component/clients-list-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientsListComponentComponent },
  { path: 'detalle/:id', component: ClientsListDetallesComponent},
  { path: 'cliente/:id', component: ClienteFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
