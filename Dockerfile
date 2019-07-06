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

ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
ENV SHOPIFY_API_SECRET_KEY=$SHOPIFY_API_SECRET_KEY
ENV APP_SCOPE=$APP_SCOPE
ENV APP_DOMAIN=$APP_DOMAIN
ENV appStoreTokenTest=$appStoreTokenTest
ENV FE_DOMAIN=$FE_DOMAIN
EXPOSE 80
CMD [ "npm", "run", "serve" ]