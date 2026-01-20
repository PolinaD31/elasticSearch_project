# Build frontend
FROM node:22-alpine AS frontend-build

WORKDIR /usr/src/app

COPY client/package*.json ./
RUN npm ci

COPY client/ ./

RUN npm run build

# Build backend + combine with frontend
FROM node:22-alpine

WORKDIR /usr/src/app

COPY server/package*.json ./
RUN npm ci --only=production

COPY server/ ./

COPY --from=frontend-build /usr/src/app/dist ./dist

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
