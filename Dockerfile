ARG NODE_VERSION=16.13.0

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY . ./
RUN yarn install --frozen-lockfile

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
COPY . ./
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/src ./src
COPY --from=build /app/.babelrc.json ./.babelrc.json
COPY --from=build /app/package.json ./package.json
EXPOSE 3000
CMD ["yarn", "start"]
