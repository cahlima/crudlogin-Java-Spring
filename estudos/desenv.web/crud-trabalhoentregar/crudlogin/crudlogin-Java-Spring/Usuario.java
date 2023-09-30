package br.com.acacia.login;

import java.io.Serializable;
import javax.persistence.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;






@RestController


@CrossOrigin (origins = "http://localhost:4200")

public class UsuarioREST {
	public static List<Usuario> lista = new ArrayList<>();
	
	@Autowired
private UsuarioRepository repo;
@Autowired
private ModelMapper mapper;
	
@PostMapping ("/usuarios")
UsuarioDTO inserir (@RequestBody UsuarioDTO usuario) {

    repo.save (
mapper.map(usuario, Usuario.class));


// busca o usuário inserido
Usuario usu = repo.findByLogin(
usuario.getLogin())

return mapper.map(usu, UsuarioDTO.class);}

@GetMapping("/usuarios")
List<UsuarioDTO> listarTodos() {

    List<Usuario> lista = repo.findAll();
// Converte lista de Entity para lista DTO


return lista.stream()

.map(e -> mapper.map(e,

UsuarioDTO.class))

collect(Collectors.toList()); }}


@Entity
@Table(name="tb_usuarios")
    public class Usuario
    implements Serializable{
@Column(name="perfil_usu")
    private static final Long

    serialVersionUID = 1L;
@Id

@GeneratedValue
@Column(name="id_usu")
    private Long id;
@Column(name="nome_usu")
p   
@Column(name="login_usu")
    private String login;
@Column(name="senha_usu")
    private String senha;
@Column(name="perfil_usu")
    private String perfil;
    }