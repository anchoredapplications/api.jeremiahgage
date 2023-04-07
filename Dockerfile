FROM node:lts-alpine
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install nodemon -g
COPY ./ .
EXPOSE 8080
CMD ["nodemon", "./src/index.js"]
