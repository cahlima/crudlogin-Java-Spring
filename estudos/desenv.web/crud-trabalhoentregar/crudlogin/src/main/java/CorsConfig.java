import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsConfig implements WebMvcConfigurer {
	
	 


 @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Permitir solicitações de qualquer origem (não recomendado para produção)
        config.addAllowedHeader("*"); // Permitir todos os cabeçalhos
        config.addAllowedMethod("GET, POST, PUT, DELETE, OPTIONS"); // Permitir todos os métodos HTTP

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
 
 @Override
 public void addCorsMappings(CorsRegistry registry) {
     registry.addMapping("/**")
         .allowedOrigins("http://localhost:4200") // Permita apenas solicitações de http://localhost:4200
         .allowedMethods("GET", "POST", "PUT", "DELETE")
         .allowCredentials(true);
 }
 

}
