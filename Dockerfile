# docker run -d --rm -p 5432:5432 -e POSTGRES_PASSWORD=password -v $HOME/Desktop/django/.venv/data:/var/lib/postgresql/data postgres:13.1-alpine

FROM node:12-alpine

RUN mkdir /code

WORKDIR /code

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

CMD [ "yarn","start" ]