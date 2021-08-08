import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RedesComponent } from './components/redes/redes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    PortafolioComponent,
    ClientesComponent,
    RedesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
