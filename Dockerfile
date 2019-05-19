FROM node:carbon-alpine as dist
WORKDIR /tmp/
ENV .env /
COPY package.json package-lock.json tsconfig.json tsconfig.build.json ./ 
COPY src/ src/
RUN npm install
RUN npm run build
COPY package.json package-lock.json ./
RUN npm install

FROM node:carbon-alpine
WORKDIR /usr/local/nub-api
ENV .env /
COPY package.json package-lock.json tsconfig.json tsconfig.build.json ./
COPY --from=dist /tmp/src ./src
COPY --from=dist /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
CMD ["npm","run","serve"]