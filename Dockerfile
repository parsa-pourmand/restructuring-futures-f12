# Start from the Ubuntu image
FROM node:18.16.0

COPY . .

WORKDIR \svelte-app

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 5173