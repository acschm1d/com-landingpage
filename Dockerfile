FROM node:16.13.0-alpine AS build
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build

FROM nginx:1.21.3-alpine AS static
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./
