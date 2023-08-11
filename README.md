
# How to install Radix Themes in the Next.js App Router?
Understand the installation process of Radix Themes in the nextjs app router, [then check out my article](https://medium.com/frontendweb/how-to-install-radix-themes-in-the-next-js-app-router-97b41425ac9b).

## installation

### Clone the project
```bash
git clone https://github.com/officialrajdeepsingh/radix-theme.git
```
### Change the folder 
```bash
cd radix-theme
```

### Install the node package
```bash
npm install
# or
pnpm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Note
Remove the following code when you start your local development server. The following code only works when you deploy your site on the GitHub page.

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export",
  images: {
    unoptimized: envImageUnoptimize,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

```
