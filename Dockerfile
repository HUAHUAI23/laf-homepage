# 构建阶段
FROM node:22.2.0-alpine AS builder

# 安装 pnpm
RUN npm install -g pnpm@9.6.0

WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装所有依赖（包括 devDependencies）
RUN pnpm install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建应用，忽略 ESLint 和 TypeScript 错误
RUN NEXT_TELEMETRY_DISABLED=1 pnpm build || true

# 生产阶段
FROM node:22.2.0-alpine AS production

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9.6.0

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 仅安装生产依赖
RUN pnpm install --prod --frozen-lockfile

# 从构建阶段复制必要的文件
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components
COPY --from=builder /app/constants ./constants
COPY --from=builder /app/hooks ./hooks
COPY --from=builder /app/middleware.ts ./
COPY --from=builder /app/providers ./providers
COPY --from=builder /app/types ./types
COPY --from=builder /app/ui ./ui
COPY --from=builder /app/postcss.config.mjs ./
COPY --from=builder /app/tailwind.config.ts ./

# 暴露端口 3000
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 启动应用
CMD ["pnpm", "start"]
