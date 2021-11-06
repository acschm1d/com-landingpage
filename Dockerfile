FROM node:16.13.0-alpine AS build
RUN apk --no-cache add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers make python2
RUN npm install --quiet node-gyp -g
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build

FROM nginx:1.21.3-alpine AS static
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./
