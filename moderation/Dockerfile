FROM node:16-alpine

WORKDIR /usr/app/moderation-api

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]