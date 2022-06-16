FROM strapi/base

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx patch-package

EXPOSE 1337

RUN npm run build

