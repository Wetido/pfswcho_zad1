FROM node:16-alpine

COPY ./package.json .

WORKDIR '/app'

RUN npm install

RUN npm install -g @vue/cli-service-global
RUN npm install -g @vue/cli

COPY . .

#RUN chown -R node:node /app

#Zbudowanie aplikacji
CMD ["npm", "run", "serve"]

EXPOSE 8080




