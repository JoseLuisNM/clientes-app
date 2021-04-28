import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './layout/footer-component/footer-component.component';
import { HeaderComponentComponent } from './layout/header-component/header-component.component';
import { ClientsListComponentComponent } from './components/clients-list-component/clients-list-component.component';
import { ClientsListDetallesComponent } from './components/clients-list-detalles/clients-list-detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ClientsListComponentComponent,
    ClientsListDetallesComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
