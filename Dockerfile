FROM node:alpine

WORKDIR /app

#COPY ./server.js /app

COPY   . .

EXPOSE 9898

CMD node server.js
