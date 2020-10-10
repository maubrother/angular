import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar http modulo para api rest
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstilosComponent } from './estilos/estilos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { ProductoComponent } from '../app/component/producto/producto.component';
import { FiltrosComponent } from './filtros/filtros/filtros.component';
import { PlantillaComponent } from './component/plantilla/plantilla.component';
import { CocheComponent } from './coche/coche.component';
import { PostsComponent } from './component/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    ClienteComponent,
    PersonaComponent,
    CursoComponent,
    EstilosComponent,
    PageNotFoundComponent,
    HomeComponent,
    ParametrosComponent,
    HeaderComponent,
    NavigationComponent,
    ProductoComponent,
    FiltrosComponent,
    PlantillaComponent,
    CocheComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //<--agregar archivo de routes
    FormsModule,      //<--agregar forms module
    HttpClientModule  //agregar httpmodulo para comunicacion     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
