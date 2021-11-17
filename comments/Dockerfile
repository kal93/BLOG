FROM node:16-alpine

WORKDIR /usr/app/comments-api

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD [ "npm" ,"start" ]