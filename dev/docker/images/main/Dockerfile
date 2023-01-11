FROM node:lts-alpine
LABEL maintainer="nikurasu_tan publicmail@nikurasu.gay"
WORKDIR /app
COPY src/ ./src
COPY package.json ./
COPY yarn.lock ./
COPY .env ./.env
COPY assets /assets
RUN mv /assets/config/config.yml.example /assets/config/config.yml
COPY dev/shell/entrypoint.sh /entrypoint.sh
RUN yarn && yarn clean && yarn build-prod
EXPOSE 3000
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]