import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './shared';
import { LoginService } from './auth/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabalho Equipe 3';

  constructor(
    private router: Router,
    private loginService: LoginService,
    
    ) { }
    get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
    }
    logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
    }
}



