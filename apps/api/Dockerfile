FROM node:20-alpine
WORKDIR /app
COPY apps/api/package*.json ./
RUN npm ci --omit=dev
COPY apps/api/ .
EXPOSE 3000
CMD ["node", "index.js"]
