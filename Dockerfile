FROM node:20-alpine

WORKDIR /usr/src/app

ENV SKIP_YARN_COREPACK_CHECK 1

COPY . .

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD [ "yarn", "dev" ]
