import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderComponent } from './header/header.component';
import { RecuperarcontraComponent } from './recuperarcontra/recuperarcontra.component';
import { FooterComponent } from './footer/footer.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ImagenprincipalComponent } from './imagenprincipal/imagenprincipal.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioUsuarioComponent } from './usuario/inicio-usuario/inicio-usuario.component';
import { ServiciosUsuarioComponent } from './usuario/servicios-usuario/servicios-usuario.component';
import { AgendarUsuarioComponent } from './usuario/agendar-usuario/agendar-usuario.component';
import { HeaderUsuarioComponent } from './usuario/header-usuario/header-usuario.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ServiciosComponent,
    HeaderComponent,
    RecuperarcontraComponent,
    FooterComponent,
    UbicacionComponent,
    ImagenprincipalComponent,
    AcercaComponent,
    ContactoComponent,
    InicioUsuarioComponent,
    ServiciosUsuarioComponent,
    AgendarUsuarioComponent,
    HeaderUsuarioComponent,
      CalendarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
