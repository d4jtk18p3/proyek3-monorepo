FROM node:15-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d.default.conf

COPY src/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]