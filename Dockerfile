FROM ubuntu:xenial-20210416
#Dont forget to copy and extract the right node version:  wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz
COPY . .
ENV PATH /node-v14.17.0-linux-x64/bin:$PATH
WORKDIR /mvpMaes/frontend
RUN npm install && npm audit fix
WORKDIR /mvpMaes/backend
RUN npm install && npm audit fix
WORKDIR /
RUN touch app.logs
RUN chmod +x appstart.sh
CMD (npm start --prefix /mvpMaes/backend &) && (npm start --prefix /mvpMaes/frontend &) && tail -f app.logs