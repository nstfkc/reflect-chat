FROM node:18

WORKDIR /usr/src/app
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm i -g pnpm@8.5.1

# Copy root package.json and lockfile
COPY . .

RUN pnpm install
RUN pnpm db:generate
RUN pnpm build --filter api

EXPOSE 8080

CMD [ "node", "apps/api/dist/index.js" ]
