# 📓 Lesson 01: Create a new Next.js ecommerce app from a starter project

[Next.js](https://nextjs.org/) is a web framework with a variety of tools built on top of [React](https://reactjs.org/) that gives developers a way to build powerful web apps.

The best part? The APIs that make it so powerful and flexible aren't overly complicated, making the framework more approachable to get started with.

## What to Expect

In this lesson, we'll learn how to create a new application with React framework Next.js.

To do this, we can use Create Next App, which is a commandline tool that allows us to quickly scaffold a new project.

For this workshop, we'll be starting from an existing example that will give us some products and a UI to work with before jumping in.

## Objectives
* Create a new Next.js application
* Explore new project

## Exercises

### 1. Creating a new Next.js application from an example project

By default, Create Next App will use a Next.js-managed template, which gives an example homepage, API route, and some very basic styles.

In order to make the best of our time, we'll be starting from an example Next.js app, using the same commandline tool, but by passing in an additional argument with our template.

#### Getting Started

In your terminal, run:

```
yarn create next-app -e https://github.com/colbyfayock/media-ecommerce-workshop-starter my-online-store
# or
npx create-next-app -e https://github.com/colbyfayock/media-ecommerce-workshop-starter my-online-store
```

Next, navigate to your new project directory:

```
cd my-online-store
```

Finally, start your development server with:

```
yarn dev
# or
npm run dev
```

#### Resources
* [Media Ecommerce Starter](https://github.com/colbyfayock/media-ecommerce-workshop-starter) (github.com)

### 2. Exploring Next.js and how pages work

If this is your first time using Next.js, you've just stepped into a super powerful framework that makes it easy for developers to build experiences.

Part of that is its APIs for creating pages and fetching data to build those experiences dynamically.

We'll explore some of the features we're already using with Next.js and the basics of our new online store.

#### Getting Started

Explore your newly created project! Some files you can check out that we will be working with are:
* Homepage: `src/pages/index.js`
* Product Pages: `src/pages/[productId].js`
* Product Data: `src/data/products.json`

## Extra Credit

### 1. Update the title of the store

We started up a new online store called Space Jelly, but they don't franchise quite yet! That means, you need to come up with your own store name.

Update the title of the store throughout the application to your new store!

P.S. don't forget the SEO metadata!

#### Getting Started

You can find the `<Head>` component in all of the Page files where you can manage how your page title looks.

#### Where We'll Make Changes
* `src/pages/index.js`
* `src/pages/products/[productId].js`
* `src/components/Footer/Footer.js`
* `src/components/Header/Header.js`

## Next Lesson

[02 - Create a new GitHub repository and link local project](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/02%20-%20Create%20a%20new%20GitHub%20repository%20and%20link%20local%20project.md)
