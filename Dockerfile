FROM node:14-alpine

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --immutable
COPY . .

CMD [ "node", "index.js" ]
