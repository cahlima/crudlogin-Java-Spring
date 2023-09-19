import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  BASE_URL = "http://localhost:8081/login";
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  };

  private LS_CHAVE: string = 'chaveLocalStorage';

  constructor(private httpClient: HttpClient) { }


  public get usuarioLogado(): Usuario {
    let usu = localStorage[this.LS_CHAVE];
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
    }
    public set usuarioLogado(usuario: Usuario) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
    }
    logout() {
    delete localStorage[this.LS_CHAVE];
    }

    login(login: Login): Observable<Usuario | null> {
      return this.httpClient.post<Usuario>(this.BASE_URL,
        login,
        this.httpOptions);

    
      }

    }