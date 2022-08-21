FROM node:16 AS base
WORKDIR /workload
# 安装所需的程序
RUN sed -i "s@http://ftp.debian.org@https://repo.huaweicloud.com@g" /etc/apt/sources.list \
  && sed -i "s@http://security.debian.org@https://repo.huaweicloud.com@g" /etc/apt/sources.list \
  && sed -i "s@http://deb.debian.org@https://repo.huaweicloud.com@g" /etc/apt/sources.list \
  && apt-get -o Acquire::Check-Valid-Until=false update -y \
  && apt-get install apt-transport-https ca-certificates -y \
  && apt-get install vim telnet less -y
# 开始构建
COPY .nuxt /workload/.nuxt
COPY src/static /workload/static
COPY package.json /workload/package.json
COPY node_modules /workload/node_modules
COPY nuxt.config.js /workload/nuxt.config.js
CMD npm run start
