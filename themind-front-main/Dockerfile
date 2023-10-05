FROM node:18.12.1-alpine3.15 as build

WORKDIR /

COPY package*.json /

RUN npm install

COPY ./ /

RUN npm run build

FROM nginx:1.23

COPY --from=build /dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
