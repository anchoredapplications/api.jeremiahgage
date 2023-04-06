FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/app
COPY package*.json ./
RUN npm install cors dotenv axios express body-parser
RUN npm install pm2 -g
RUN npm install -g nodemon
COPY . .
EXPOSE 80
CMD ["pm2-runtime", "./src/index.js"]
