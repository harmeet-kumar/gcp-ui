FROM node:8-alpine

COPY . .

RUN npm install

ENTRYPOINT [ "ng","serve" ]