FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
EXPOSE 8000
CMD ["npx", "ts-node", "src/server.ts"]
