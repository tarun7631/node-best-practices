FROM node:8

ARG NODE_ENV=development1
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
        npm install nodemon -g

COPY . ./


EXPOSE 3000 80

CMD [ "npm", "start" ]
