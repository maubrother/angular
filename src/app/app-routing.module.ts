import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillaComponent } from './component/plantilla/plantilla.component';
//importar componentes
import { CursoComponent } from './curso/curso.component';
import { EstilosComponent } from './estilos/estilos.component';
import { FiltrosComponent } from './filtros/filtros/filtros.component';
import { HolaComponent } from './hola/hola.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { PersonaComponent } from './persona/persona.component';
import { ProductoComponent } from '../app/component/producto/producto.component';
import { CocheComponent } from './coche/coche.component';
import { PostsComponent } from './component/posts/posts.component';

//definir rutas de la aplicacion
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'hola', component: HolaComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'estilo', component: EstilosComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'parametros/:param_nombre', component: ParametrosComponent},
  {path: 'plantilla', component: PlantillaComponent},
  {path: 'coche', component: CocheComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
