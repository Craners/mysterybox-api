FROM node:carbon-alpine as dist
WORKDIR /tmp/
ENV .env /
COPY package*.json tsconfig.json tsconfig.build.json ./ 
COPY src/ src/
RUN npm install
RUN npm run build
RUN npm install

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "run", "serve" ]