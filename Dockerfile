FROM node:15.13-alpine
WORKDIR /covid-19-api
ENV PATH "./node_modules/.bin:$PATH"
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3000