FROM node:24-alpine

WORKDIR "/var/www/myapp"

# Installs extensions and clears cache
RUN apk add --no-cache nano nginx supervisor

RUN chown -R node:node /var/www/myapp

# Copies project as node (default node user)
COPY --chown=node:node . .

# Sets up dependencies and builds the webapp
RUN npm install -g pnpm && pnpm install
RUN pnpm run build

RUN rm -rf /usr/share/nginx/html && \
  mv dist /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

COPY .docker/local/nginx.conf /etc/nginx/http.d/default.conf
COPY .docker/local/supervisord.conf /etc/supervisor.conf
COPY .docker/local/entrypoint.sh /entrypoint.sh

RUN rm -rf .docker/ .dockerignore

EXPOSE 80

RUN chmod +x /entrypoint.sh

# Start both Nginx + Symfony in parallel
ENTRYPOINT ["/entrypoint.sh"]