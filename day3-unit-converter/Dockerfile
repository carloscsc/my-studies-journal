FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "preview"]

