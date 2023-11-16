import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component'; 
import { HomeComponent } from './components/home/home.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FornecedorComponent } from './components/fornecedores/fornecedores.component';
import { ListaFornecedoresComponent } from './components/lista-fornecedores/lista-fornecedores.component';

const routes: Routes = [
{path: 'clientes', component: ClientesComponent},
{path: 'home', component: HomeComponent},
{path: 'lista', component:ListaClientesComponent},
{path: "produto", component: ProdutosComponent},
{path: "fornecedor", component: FornecedorComponent},
{path: "listaforn", component: ListaFornecedoresComponent

}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }