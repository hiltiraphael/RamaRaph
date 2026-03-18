# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Kopiere package Dateien vom Context (Hauptverzeichnis)
COPY package*.json ./
RUN npm install

# Kopiere den Rest
COPY . .

# Führe den Build aus - das erstellt den /app/build Ordner
RUN npm run build

# Entferne Dev-Dependencies
RUN npm prune --production

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app

# Kopiere die gebauten Dateien und die package.json
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production

# Starte die App über die index.js im build Ordner
CMD ["node", "build/index.js"]