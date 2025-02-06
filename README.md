This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Additional Notes

Owing to the fact that i saw the email later than supposed (completely my fault), i had not time to add additional functionality which i had in mind, so i will list them here:

1) I added cashing for the fetched information on tRPC, so that the data is only fetched once and then stored in the cache, this is to reduce the number of requests made to the API, however
i had not have time to think through the best way to add i18n (internationalization) to the project, for the seamless transaction between languages. I would have configured i18n-next to handle this, and the proper way to change languages would be through LocaleSwitcher, but for the purpose of this assignment that would have been done through changing URL query to prefered language

2) When it comes to testing, I thought that the proper way to test the application would be end-to-end testing, since addition of tRPC is not something that usually being tested with unit tests

3) Currently the project supports only one language (fr) since the language toggle is not implemented properly, but the project is ready to support multiple languages thanks to the i18n initial configuration that i have added

The reason is took long to come up with the idea for the project is because i had two ideas in mind which i wanted to implement:

first is usage of server side rendering that Nextjs provides
second is with usage of 'use client' and react-query fetching with 'tanstack-query' package

## UPD

# How to change language: Change URL query from /en to /fr or any prefered language 

I couldn't just leave half-working project, so I added new stuff, please refer to first commit if you wish to see the work that was done during first 5 hours.