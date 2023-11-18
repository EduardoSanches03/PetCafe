import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component'; 
import { HomeComponent } from './components/home/home.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FornecedorComponent } from './components/fornecedores/fornecedores.component';
import { ListaFornecedoresComponent } from './components/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { EditfornmodalComponent } from './components/editfornmodal/editfornmodal.component';
import { EditclienmodalComponent } from './components/editclienmodal/editclienmodal.component';

const routes: Routes = [
{path: 'clientes', component: ClientesComponent},
{path: 'home', component: HomeComponent},
{path: 'lista', component:ListaClientesComponent},
{path: "produto", component: ProdutosComponent},
{path: "fornecedor", component: FornecedorComponent},
{path: "editforn", component: EditfornmodalComponent},
{path: "editClien", component: EditclienmodalComponent},
{path: "listaforn", component: ListaFornecedoresComponent},
{path: "listaprodu", component: ListaProdutosComponent


}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }