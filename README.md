## Requirements

Minimum Node.js version 18.17

You can download the LTS version on [Download Node.js](https://nodejs.org/en)

## Getting Started

First, install all new dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Basic Rules to Code

- The use of any Sass framework is prohibited.
- The use of any new library must first be validated with the front-end leader.
- The installation of new libraries must be done only through `package.json`.
- The use of CSS inside SASS is prohibited.
- BEM should be used with a maximum of 3 layers.
- All providers must be implemented with Axios.
- The use of `any` should be avoided when defining interfaces.
- The folder structure cannot be modified.
- For dynamic routing only use `react-router`.
- The configuration for data persistence cannot be changed without prior notice.
- The use of the `important!` property in styles is prohibited.
- Avoid anchoring styles to ids, instead make use of classes.
- Avoid uploading any type of image or logo into the repository, all images should come from external servers.
- It is recommended to convert all icons to font for better handling. You can use [Icomoon](https://icomoon.io/) to convert multiple SVG in a unique font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
