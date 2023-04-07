FROM node:lts-alpine
ENV NODE_ENV=production
EXPOSE 8080
WORKDIR /app
COPY package*.json ./
RUN npm install cors dotenv axios express pm2 -g
RUN npm install nodemon -g
COPY . .
CMD ["make", "up-prod"]
