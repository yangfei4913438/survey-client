# build stage
FROM node:lts-alpine as build-stage

# Dockerfile
ARG NEXT_PUBLIC_API_HOST
ARG NEXT_PUBLIC_API_PORT

# 使用 ARG 设置 ENV，这样的话这些值就可以在构建过程中被使用
ENV NEXT_PUBLIC_API_HOST=$NEXT_PUBLIC_API_HOST
ENV NEXT_PUBLIC_API_PORT=$NEXT_PUBLIC_API_PORT

WORKDIR /temp

# Copying package files and installing dependencies
COPY package.json yarn.lock .
RUN yarn install --registry=https://registry.npmmirror.com/ --frozen-lockfile && yarn cache clean --force

# Copying source files and building the application
COPY . .
RUN yarn run build


# production stage
FROM node:lts-alpine as production-stage

WORKDIR /app

# Copying only necessary files from build-stage
COPY --from=build-stage /temp/next.config.js ./next.config.js
COPY --from=build-stage /temp/public ./public
COPY --from=build-stage /temp/.next ./.next
COPY --from=build-stage /temp/package.json ./package.json
COPY --from=build-stage /temp/yarn.lock ./yarn.lock

# Installing only production dependencies
RUN yarn install --registry=https://registry.npmmirror.com/ --only=production && yarn cache clean --force

# Exposing the right port
EXPOSE 3007

# Starting the application
CMD [ "yarn", "run", "start" ]
