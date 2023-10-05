#using official 'node' image, with the alpine 3.15 branch as base image for development stage
FROM node:18.12.1-alpine3.15 As development

#copy package.json and package-lock.json files
WORKDIR /usr/src/app

COPY package*.json ./

#install dependencies
RUN npm install --only=development

#copy all files from current directory
COPY . .

RUN npm run build

EXPOSE 3000

#using official 'node' image, with the alpine 3.15 branch as base image for production stage
FROM node:18.12.1-alpine3.15 As production

#define the default value for NODE_ENV
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

#copy package.json and package-lock.json files
WORKDIR /usr/src/app

COPY package*.json ./

# install only dependencies defined in 'dependencies' in package.json
RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]