FROM node:lts-alpine
LABEL maintainer="nikurasu_tan publicmail@nikurasu.gay"
WORKDIR /app
COPY src/ ./src
COPY package.json ./
COPY yarn.lock ./
COPY assets /assets
COPY dev/shell/entrypoint.sh /entrypoint.sh
RUN yarn
RUN yarn clean
RUN yarn build-prod
EXPOSE 3000
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]