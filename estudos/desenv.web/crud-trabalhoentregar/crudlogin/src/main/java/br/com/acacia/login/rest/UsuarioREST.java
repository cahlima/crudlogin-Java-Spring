package br.com.acacia.login.rest;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.com.acacia.login.model.Usuario;
import br.com.acacia.login.model.Login;

@CrossOrigin
@RestController
public class UsuarioREST {
public static List<Usuario> lista = new ArrayList<>();
@PostMapping("/login")
Usuario login(@RequestBody Login login) {
Usuario usuario = lista.stream().
filter(usu -> usu.getLogin().equals(login.getLogin()) &&
usu.getSenha().equals(login.getSenha())).
findAny().orElse(null);
return usuario;
}
@GetMapping("/login")
List<Usuario> listarTodos() {
return lista;
}
static {
lista.add(new Usuario(1, "administr", "admin", "admin", "ADMIN"));
lista.add(new Usuario(2, "gerent", "gerente", "gerente", "GERENTE"));
lista.add(new Usuario(3, "funcion", "func", "func", "FUNC"));
}
}
