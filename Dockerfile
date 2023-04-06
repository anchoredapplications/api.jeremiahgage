FROM node:lts-alpine
ENV ENV=production
WORKDIR /usr/app
COPY package*.json ./
RUN npm install cors dotenv axios express
RUN npm install pm2 -g
RUN npm install -g nodemon
COPY . .
EXPOSE 8080
CMD ["nodemon", "./src/index.js"]
