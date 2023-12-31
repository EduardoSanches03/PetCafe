import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesService } from './Servico/ClienteServico/clientes.service';
import { HomeComponent } from './components/home/home.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutosService } from './Servico/ProdutoServico/produtos.service';
import { FornecedoresService } from './Servico/FornecedorServico/fornecedores.service';
import { FornecedorComponent } from './components/fornecedores/fornecedores.component';
import { ListaFornecedoresComponent } from './components/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { EditfornmodalComponent } from './components/editfornmodal/editfornmodal.component';
import { EditclienmodalComponent } from './components/editclienmodal/editclienmodal.component';
import { EditprodumodalComponent } from './components/editprodumodal/editprodumodal.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { AnimaisService } from './Servico/AnimalServico/animais.service';
import { ListaAnimaisComponent } from './components/lista-animais/lista-animais.component';
import { EditanimalmodalComponent } from './components/editanimalmodal/editanimalmodal.component';
import { AdocoesComponent } from './components/adocoes/adocoes.component';
import { AdocoesService } from './Servico/AdocaoServico/adocoes.service';
import { ListaAdocoesComponent } from './components/lista-adocoes/lista-adocoes.component';
import { EditadocaomodalComponent } from './components/editadocaomodal/editadocaomodal.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { VendasService } from './Servico/VendaServico/vendas.service';
import { ListaVendasComponent } from './components/lista-vendas/lista-vendas.component';
import { EditvendamodalComponent } from './components/editvendamodal/editvendamodal.component';

@NgModule({
  declarations: [
    ClientesComponent,
    HomeComponent,
    ListaClientesComponent,
    ProdutosComponent,
    FornecedorComponent,
    AppComponent,
    ListaFornecedoresComponent,
    ListaProdutosComponent,
    EditfornmodalComponent,
    EditclienmodalComponent,
    EditprodumodalComponent,
    AnimaisComponent,
    ListaAnimaisComponent,
    EditanimalmodalComponent,
    AdocoesComponent,
    ListaAdocoesComponent,
    EditadocaomodalComponent,
    VendasComponent,
    ListaVendasComponent,
    EditvendamodalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [
    HttpClientModule,
    ClientesService,
    ProdutosService,
    FornecedoresService,
    AnimaisService,
    AdocoesService,
    VendasService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
