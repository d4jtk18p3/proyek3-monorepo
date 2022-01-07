FROM node:15-alpine AS production

COPY . /src/app

WORKDIR /src/app
RUN npm ci --only=production

WORKDIR /src/app/postgres-database
RUN npm install --only=production

WORKDIR /src/app/monitoring
RUN npm install --only=production

CMD ["node", "--experimental-specifier-resolution=node", "src/main.js"]
