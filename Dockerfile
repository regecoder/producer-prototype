# -----------------------------------------------------------------------------
# Scenso web app
# -----------------------------------------------------------------------------
# Créer l'image
# docker build -t scenso/web .
# Lancer le container
# docker run --rm -p 8080:8080 -v $(pwd):/srv/web -v /srv/web/node_modules --name='scenso-web' -it scenso/web

FROM node:8.6.0-alpine

ARG WEB_DIR=/srv/web

WORKDIR $WEB_DIR

COPY package*.json ./
RUN npm install

USER node
EXPOSE 8080

CMD ["npm", "start"]
