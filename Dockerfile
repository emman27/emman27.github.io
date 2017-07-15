From node:alpine
MAINTAINER emman27

WORKDIR /apps
ADD . /app
RUN npm install

RUN npm run build

EXPOSE 8000

CMD npm start
