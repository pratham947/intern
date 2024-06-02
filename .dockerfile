FROM node:16-alpine

WORKDIR /main-dir

COPY package*.json ./ 

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]