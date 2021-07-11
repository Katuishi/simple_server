FROM node:16-alpine3.13
WORKDIR /app
COPY . .
RUN yarn install --production
EXPOSE 3000
CMD [ "yarn","start" ]