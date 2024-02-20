# Turborepo Next.js tRPC starter

This is a starter Turborepo project with [Next.js](https://nextjs.org/) and [T3 stack](https://create.t3.gg/) (tRPC, Tailwind, and TypeScript) and a few other stuff.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: TailwindCss for styling
- `@repo/trpc`: tRPC configurations
- `@repo/db`: Prisma for database ORM
- `@repo/auth`: NextAuth for authentication
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### To Do

- Prisma ✅
- tRPC ✅
- test crud operations ✅
- Tailwind ✅
- Environment variables ✅
- tRPC client setup ✅
- NextAuth - not tested yet ❌
  - Create Auth ui components in header ❌
  - Create Auth form and test NextAuth ❌ (See next-auth-exmaple[GitHub])
  - Create a button - href={api/auth/signin} and see what happens
- ShadCn UI ❌

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Develop

To develop all apps and packages, run the following command:

```
cd <dir-name>
npm run dev
```

To Setup DB

```
docker run --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v /data:/var/lib/postgresql/data  postgres -c log_statement=all
```

Update the `DATABASE_URL` in `.env` file and run the following to synchronize the prisma schema with database.
```
npm run db:push
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
