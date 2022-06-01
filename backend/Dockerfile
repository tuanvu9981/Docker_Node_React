FROM node:14.5.0-alpine

WORKDIR /app/backend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

# CMD ["node", "app_atlas.js"]

CMD ["node", "app_desktop.js"]

# WORKDIR /app/backend & COPY . . --> COPY EVERYTHING EXCEPT FOLDER/FILE(s) IN .dockerignore INSIDE ./backend