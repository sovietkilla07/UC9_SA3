import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';

const routes: Routes = [
  {path: "contato", component: ContatoComponent},
  {path: "login", component: LoginComponent},
  {path: "header", component: HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
