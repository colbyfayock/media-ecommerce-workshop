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
* Product Data: `src/data/products.json`

The homepage file includes the React that renders the page.

The product data is what it sounds like, but importantly, is where we manage the image locations, which we'll update in a later lesson when starting to work with Cloudinary.

## Next Lesson

[02 - Optimized, Responsive Images from Cloudinary with CldImage](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/02%20-%20Optimized%20Responsive%20Images%20from%20Cloudinary%20with%20CldImage.md)
