FROM node:16-alpine

WORKDIR /usr/app/query-api

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]