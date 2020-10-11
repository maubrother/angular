import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar http modulo para api rest
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { PostsComponent } from './component/posts/posts.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavigationComponent,
    PostsComponent,
    InicioComponent
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
