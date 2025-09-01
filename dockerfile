# Etapa 1 - Build
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2 - Preview server
FROM node:20

WORKDIR /app

COPY --from=builder /app /app

# Vite preview roda em modo produção
EXPOSE 5001

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5001"]
