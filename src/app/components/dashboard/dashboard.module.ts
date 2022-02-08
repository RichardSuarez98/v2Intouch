import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { CasaComponent } from './casa/casa.component';
import { UrbanizationComponent } from './urbanization/urbanization.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolesComponent } from './roles/roles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudUrbanizacionComponent } from './urbanization/crud-urbanizacion/crud-urbanizacion.component';
import { ConsultarUrbanizacionComponent } from './urbanization/consultar-urbanizacion/consultar-urbanizacion.component';
import { ListarCasaComponent } from './casa/listar-casa/listar-casa.component';
import { CrudCasaComponent } from './casa/crud-casa/crud-casa.component';
import { CrudUsuarioComponent } from './usuario/crud-usuario/crud-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    CasaComponent,
    UrbanizationComponent,
    UsuarioComponent,
    RolesComponent,
    NavbarComponent,
    CrudUrbanizacionComponent,
    ConsultarUrbanizacionComponent,
    ListarCasaComponent,
    CrudCasaComponent,
    CrudUsuarioComponent,
    ListarUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
