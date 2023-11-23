import { Component, NgModule } from '@angular/core';
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
import { EditprodumodalComponent } from './components/editprodumodal/editprodumodal.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { ListaAnimaisComponent } from './components/lista-animais/lista-animais.component';
import { AdocoesComponent } from './components/adocoes/adocoes.component';
import { ListaAdocoesComponent } from './components/lista-adocoes/lista-adocoes.component';
import { EditadocaomodalComponent } from './components/editadocaomodal/editadocaomodal.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { ListaVendasComponent } from './components/lista-vendas/lista-vendas.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: ListaClientesComponent },
  {path: 'listaAnimais', component: ListaAnimaisComponent},
  { path: 'produto', component: ProdutosComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'editforn', component: EditfornmodalComponent },
  { path: 'editClien', component: EditclienmodalComponent },
  { path: 'editProdu', component: EditprodumodalComponent },
  { path: 'listaforn', component: ListaFornecedoresComponent },
  { path: 'listaprodu', component: ListaProdutosComponent },
  { path: 'animal', component: AnimaisComponent },
  {path: 'adocoes', component: AdocoesComponent},
  {path: 'listaAdocoes', component: ListaAdocoesComponent},
  {path: 'editAdocao', component: EditadocaomodalComponent},
  {path: 'venda', component: VendasComponent},
  {path: 'listaVenda', component: ListaVendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
