FROM node:20-alpine

WORKDIR /app

COPY code/package*.json ./
RUN npm install --force

COPY code/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]