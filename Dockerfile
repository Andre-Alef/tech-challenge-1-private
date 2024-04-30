# Dockerfile

FROM node:latest
COPY . /code
WORKDIR /code
RUN npm install
EXPOSE 3000
##CMD [ "npm", "start"]
CMD [ "npm", "run", "dev:watch"]