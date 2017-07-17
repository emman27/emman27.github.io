From node:alpine
MAINTAINER emman27

WORKDIR /app
ADD . /app
RUN apk add python2
RUN npm install
RUN npm rebuild node-sass --force
RUN npm run build

EXPOSE 8000

CMD npm start
