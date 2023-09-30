import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter("/*") // Define o padrão de URL que este filtro irá corresponder
public class CorsFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Método de inicialização (pode ser deixado vazio)
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // Adiciona o cabeçalho 'Access-Control-Allow-Origin' para permitir todas as origens
    	
    	 HttpServletResponse httpResponse = (HttpServletResponse) response;
    	 httpResponse.setHeader("Access-Control-Allow-Origin", "http//:localhost:4200/login");

        // Você pode adicionar outros cabeçalhos CORS, como métodos permitidos, cabeçalhos permitidos, etc., aqui

        // Continua a cadeia de filtros
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // Método de destruição (pode ser deixado vazio)
    }
}
