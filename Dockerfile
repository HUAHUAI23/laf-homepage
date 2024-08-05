# 使用 Node.js v22.2.0 作为基础镜像
FROM node:22.2.0-alpine AS base

# 安装 pnpm
RUN npm install -g pnpm@9.6.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建应用
RUN pnpm build

# 生产环境
FROM node:22.2.0-alpine AS production

WORKDIR /app

# 复制构建文件和必要的运行时文件
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs
COPY --from=base /app/app ./app
COPY --from=base /app/components ./components
COPY --from=base /app/constants ./constants
COPY --from=base /app/hooks ./hooks
COPY --from=base /app/middleware.ts ./middleware.ts
COPY --from=base /app/providers ./providers
COPY --from=base /app/types ./types
COPY --from=base /app/ui ./ui
COPY --from=base /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=base /app/tailwind.config.ts ./tailwind.config.ts

# 安装 pnpm
RUN npm install -g pnpm@9.6.0

# 仅安装生产依赖
RUN pnpm install --prod --frozen-lockfile

# 暴露端口 3000
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV production

# 启动应用
CMD ["pnpm", "start"]
