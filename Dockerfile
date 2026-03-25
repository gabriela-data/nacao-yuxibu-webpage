# Stage de build
FROM nginx:alpine AS builder

# Copiar arquivos da aplicação
COPY . /usr/share/nginx/html/

# Stage final
FROM nginx:alpine

# Instalar curl para health check
RUN apk add --no-cache curl

# Copiar configuração nginx personalizada (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar arquivos do estágio anterior
COPY --from=builder /usr/share/nginx/html/ /usr/share/nginx/html/

# Expor porta
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost/ || exit 1

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
