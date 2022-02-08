import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaComponent } from './casa/casa.component';
import { CrudCasaComponent } from './casa/crud-casa/crud-casa.component';
import { ListarCasaComponent } from './casa/listar-casa/listar-casa.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { RolesComponent } from './roles/roles.component';
import { ConsultarUrbanizacionComponent } from './urbanization/consultar-urbanizacion/consultar-urbanizacion.component';
import { CrudUrbanizacionComponent } from './urbanization/crud-urbanizacion/crud-urbanizacion.component';
import { UrbanizationComponent } from './urbanization/urbanization.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [{path:'',component:DashboardComponent,children:[
  {path:'', component:InicioComponent},
  {path:'usuarios', component:UsuarioComponent},
  {path:'casa', component:CasaComponent},
  {path:'registrarcasa', component:CrudCasaComponent},
  {path:'consultarcasa', component:ListarCasaComponent},
  {path:'roles', component:RolesComponent},
  {path:'urbanizacion', component:UrbanizationComponent},
  {path:'registrarurbanizacion', component:CrudUrbanizacionComponent},
  {path:'consultarurbanizacion', component:ConsultarUrbanizacionComponent},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
