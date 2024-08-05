# Next.js TypeScript Project Template

[**EN**](./README-EN.md)  
这是一个基于 [Next.js](https://nextjs.org/) 和 TypeScript 的模板项目，集成了国际化（i18n）、代码格式化、lint 检查等功能，并使用 Tailwind CSS 和 Chakra UI 作为 UI 框架。

## 特性

- **Next.js App Router**: 使用 Next.js 13+ 的 App Router 结构。
- **TypeScript**: 全面的 TypeScript 支持。
- **国际化 (i18n)**: 支持服务端和客户端组件的国际化。
- **代码格式化**: 使用 Prettier 进行代码格式化，且兼容 eslint 语法检查
- **Linting&compile**: 使用 ESLint 进行代码质量检查，tsconfig 语法检查规则
- **UI 框架**: 集成 Tailwind CSS 和 Chakra UI。
- **VSCode 集成**: 优化的 VSCode 开发体验，格式化时会自动修复 import 顺序 （simple-import-sort）, i18n any 插件方便翻译的展示

## 快速开始

1. 克隆仓库：
   git clone <https://github.com/HUAHUAI23/laf-homepage.git>
2. 安装依赖：

   ```sh
   # cd your-repo-name 
   cd laf-homepage
   pnpm install
   ```

3. 运行开发服务器：
   `pnpm dev`
4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 国际化 (i18n)

本项目使用 [i18next](https://react.i18next.com/) 实现国际化。支持在服务端和客户端组件中使用翻译功能。

参考 [next-app-dir-i18next-example-ts](https://github.com/i18next/next-app-dir-i18next-example-ts) 进行配置。

使用示例：

```typescript
// 服务端组件
import { useTranslation } from '@/app/i18n';

export default async function ServerComponent({ params: { lng } }) {
  // default ns is 'translation'
  // const { t } = await useTranslation(lng);
  const { t } = await useTranslation(lng,'common');
  return <h1>{t('title')}</h1>;
}

// 客户端组件
'use client';
import { useTranslation } from '@/app/i18n/client';

export default function ClientComponent({ lng }) {
  // default ns is 'translation'
  // const { t } = await useTranslation(lng);
  const { t } = await useTranslation(lng,'common');
  return <button>{t('button.label')}</button>;
}
```

## 代码格式化和 Linting

- 使用 Prettier 进行代码格式化。
- 使用 ESLint 进行代码质量检查。
- 配置文件：.prettierrc 和 .eslintrc.json。

运行 lint 检查：

`pnpm lint`
`pnpm lint:next`
`pnpm lint:fix`

## VSCode 集成

- 自动格式化：保存时自动格式化代码。
- Import 排序：使用 simple-import-sort 插件自动排序导入语句。
- i18n 提示：使用 i18n Ally 插件提供翻译提示。

推荐的 VSCode 插件：

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- i18n Ally
  
## UI 框架

- Tailwind CSS: 用于快速构建自定义设计。
- Chakra UI: 提供可访问的 React 组件。

## 脚本命令

- `pnpm dev`: 运行开发服务器
- `pnpm build`: 构建生产版本
- `pnpm lint:next`: 运行 next lint 检查
- `pnpm lint`: 运行 eslint lint 检查
- `pnpm lint:fix`: 运行 eslint lint 检查并修复
- `docker build  -t my-nextjs-app .` 构建 docker 镜像
- `...` 具体参考 package.json 中的 scripts 配置
