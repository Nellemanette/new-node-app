
#Create NodeJS Image 
FROM node:16
WORKDIR /usr/app
COPY ./ ./
RUN npm install 
EXPOSE 3500
CMD ["node","app.js"]