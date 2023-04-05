FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install cors dotenv axios express
RUN npm install -g nodemon
COPY . .
EXPOSE 4000
RUN npm run build
CMD ["node", "./src/index.js"]
