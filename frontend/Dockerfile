FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

RUN npm install -g @vue/cli-service-global
RUN npm install -g @vue/cli
RUN npm install http-server -g

COPY . .

#RUN chown -R node:node /app

#Zbudowanie aplikacji
CMD ["npm", "run", "serve"]

EXPOSE 8080




