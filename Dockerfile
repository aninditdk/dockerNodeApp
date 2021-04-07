FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD eval $(cat .env) node app.js
EXPOSE 5434