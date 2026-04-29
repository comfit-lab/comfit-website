# ───── 1단계: 빌드 ─────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ───── 2단계: Nginx 정적 호스팅 ─────
FROM nginx:1.27-alpine AS runner

# SPA 라우팅 + gzip 설정
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드 산출물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
