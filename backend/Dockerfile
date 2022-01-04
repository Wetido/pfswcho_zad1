FROM node:16-alpine
RUN npm i -g @nestjs/cli

WORKDIR '/app'

COPY package.json .

RUN NODE_ENV=development npm install
COPY . .

EXPOSE 5000
CMD ["npm", "start"]