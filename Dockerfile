FROM node:alpine

WORKDIR /app

#COPY ./server.js /app

COPY   . .

EXPOSE 3306

CMD node server.js
