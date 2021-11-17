
# Specify base image
FROM node:16-alpine

# set working directory
WORKDIR /usr/app/posts

# copy package.json
COPY ./package.json ./

RUN npm install

# copy project files
COPY ./ ./

# run default startup command for container
CMD [ "npm", "start" ]