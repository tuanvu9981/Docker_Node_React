FROM node:14.5.0-alpine

WORKDIR /app/backend1

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

# CMD ["node", "app.js"]

CMD ["node", "app_server.js"]

# WORKDIR /app/backend & COPY . . --> COPY EVERYTHING EXCEPT FOLDER/FILE(s) IN .dockerignore INSIDE ./backend