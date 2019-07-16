FROM alpine:3.9

WORKDIR /app

RUN apk add --update nodejs nodejs-npm

COPY . .

RUN npm install

EXPOSE 9001

CMD [ "npm", "start" ]
