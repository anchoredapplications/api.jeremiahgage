FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/app
COPY package*.json ./
RUN npm install cors dotenv axios express
RUN npm install pm2 -g
COPY . .
EXPOSE 80
CMD ["pm2-runtime", "./src/index.js"]
