FROM node:12.10.0-alpine

WORKDIR /app/frontend1

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# WORKDIR /app/frontend & COPY . . --> COPY EVERYTHING EXCEPT FOLDER/FILE(s) IN .dockerignore INSIDE ./frontend