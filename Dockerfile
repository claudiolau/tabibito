FROM node:alpine3.16

ENV NODE_VERSION 19.4.0
WORKDIR /app

COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "dev"]