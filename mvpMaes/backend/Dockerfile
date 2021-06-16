FROM ubuntu:xenial-20210416
RUN apt-get update
RUN apt-get install -y wget 
RUN apt-get install -y xz-utils
RUN wget https://nodejs.org/dist/v14.17.1/node-v14.17.1-linux-x64.tar.xz
RUN tar -xvf node-v14.17.1-linux-x64.tar.xz
COPY . .
#The folder extracted from the zipped node file will be used to install node inside the container, as can be seen below.
ENV PATH /node-v14.17.1-linux-x64/bin:$PATH
RUN npm install && npm audit fix

CMD npm start