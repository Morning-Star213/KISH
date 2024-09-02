FROM node:20.11-alpine

RUN apk update && apk add bash

WORKDIR /app/
# COPY ./package.json ./
# RUN npm install
# Copy package.json and pnpm-lock.yaml
COPY pnpm-lock.yaml package.json ./
# Install app dependencies using PNPM
RUN npm install -g pnpm
# Install dependencies
RUN pnpm i 
# Copy the application code 
#COPY . .

# # Build the TypeScript code
# RUN pnpm run build
# # Start the application
# CMD ["pnpm", "start"]
