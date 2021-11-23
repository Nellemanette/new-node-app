#Create MySQL Image for JSP Tutorial Application
FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD brunelle
ADD creation.sql /docker-entrypoint-initdb.d
EXPOSE 3306

#Create NodeJS Image 
FROM node:16
WORKDIR /usr/app
COPY ./ ./
RUN npm install 
EXPOSE 3500
CMD ["node","app.js"]