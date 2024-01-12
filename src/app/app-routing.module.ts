import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RecuperarcontraComponent } from './recuperarcontra/recuperarcontra.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioUsuarioComponent } from './usuario/inicio-usuario/inicio-usuario.component';
import { ServiciosUsuarioComponent } from './usuario/servicios-usuario/servicios-usuario.component';
import { AgendarUsuarioComponent } from './usuario/agendar-usuario/agendar-usuario.component';
import { HeaderUsuarioComponent } from './usuario/header-usuario/header-usuario.component';


//Rutas de navegación
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'recuperarcontra', component: RecuperarcontraComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'inicioUsuario', component: InicioUsuarioComponent },
  { path: 'serviciosUsuario', component: ServiciosUsuarioComponent },
  { path: 'agendarUsuario', component: AgendarUsuarioComponent },
  { path: 'headerUsuario', component: HeaderUsuarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
