import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutosModule } from './produtos/produtos.module';
import { NumericoDirective } from './shared/directives/numerico.directive';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { PedidosModule } from './pedidos/pedidos.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { LoginService } from './auth/services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from './shared';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    PedidosModule,
    ProdutosModule,
    NgbModule, 
    FormsModule,
    NgSelectModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule
    
    
  ],

  providers: [LoginService],
  
  bootstrap: [AppComponent]
})


export class AppModule { }

