# Dockerfile

FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . ./
RUN npm install
COPY . .
EXPOSE 3000
##CMD [ "npm", "start"]
CMD [ "npm", "run", "dev:watch"]