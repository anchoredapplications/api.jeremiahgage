FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install cors dotenv axios express pm2
RUN npm install -g nodemon
COPY . .
EXPOSE 4000
CMD ["pm2-runtime", "./src/index.js"]
