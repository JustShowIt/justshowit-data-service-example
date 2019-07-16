FROM alpine:3.9

WORKDIR /app

RUN apk add --update nodejs nodejs-npm && \
    npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 9001

CMD [ "nodemon", "/app/src/server.js"]
