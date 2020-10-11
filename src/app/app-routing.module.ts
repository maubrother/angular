import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './component/posts/posts.component';
import { InicioComponent } from './inicio/inicio.component';

//definir rutas de la aplicacion
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
