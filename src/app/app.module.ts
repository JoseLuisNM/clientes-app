import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './layout/footer-component/footer-component.component';
import { HeaderComponentComponent } from './layout/header-component/header-component.component';
import { ClientsListComponentComponent } from './components/clients-list-component/clients-list-component.component';
import { ClientsListDetallesComponent } from './components/clients-list-detalles/clients-list-detalles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ClientsListComponentComponent,
    ClientsListDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
