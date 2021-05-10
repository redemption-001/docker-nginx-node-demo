FROM node:15 as build
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


FROM node:15-alpine3.13

WORKDIR /usr/src/app

COPY --from=build /usr/local/bin/dockerize /usr/local/bin/

EXPOSE 3000

#CMD ["node", "src/index.js"]