FROM node:14-slim

WORKDIR /usr/src/slambook/react

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]