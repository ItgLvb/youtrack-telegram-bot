FROM node:latest
COPY ./src/js /opt/app
COPY ./package.json /opt/app
RUN cd /opt/app && npm install
CMD ls -lh /opt/app/ && node /opt/app/app.js