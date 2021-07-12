FROM python:3.8-slim-buster

WORKDIR /app

RUN pip install npm
RUN npm install http-server

CMD ["http-server"]