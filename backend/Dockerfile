FROM node:16-alpine

COPY ./package.json .

WORKDIR '/app'

RUN npm i -g @nestjs/cli
RUN npm install
COPY . .

EXPOSE 5000
CMD ["npm", "start"]