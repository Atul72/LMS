FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

# RUN pnpm build

ENV NODE_ENV=development

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
