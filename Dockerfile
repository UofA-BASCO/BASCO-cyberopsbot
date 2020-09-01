FROM node:14.9-stretch

COPY . /app

RUN cd /app && \
  npm install && \
  rm -rf /app/.git

RUN useradd -ms /bin/bash basco
USER basco
WORKDIR /app

ENTRYPOINT ["node", "/app/app.js"]
