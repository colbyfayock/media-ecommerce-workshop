# 🚀 Performance-First E-commerce & Visual Web Experiences with Cloudinary

In this workshop you'll learn how to turn a new Next.js project with large, unoptimized images into a fast, performant web app.

* [Workshop Overview](#-workshop-overview)
* [Who Am I?](#-who-am-i)
* [Before the Workshop](#-before-the-workshop)
* [The Workshop](#-the-workshop)

Demo: https://media-ecommerce-workshop.netlify.app

## 🔍 Workshop Overview

Excited to learn? You should be! Here's some of the stuff we'll learn in this workshop:
* Create a new Next.js app using a starter template
* Deploy a Next.js app on Netlify from GitHub
* Optimize all images on Netlify with the Netlify Cloudinary Plugin
* Upload and deliver optimized images from Cloudinary
* Install and configure the Cloudinary JS URL Gen SDK
* Configure responsive images with the Next.js Image Component and the Cloudinary loader
* And more? 👀 we'll see how much time we have!

## 👨‍🚀 Who Am I?

I'm Colby Fayock! 👋

Astrocoder, Developer Advocate, Space Jelly Commander—I help others get the tech out of the way to solve real problems with the tools of the web. I work with the dev community at Cloudinary and am a prolific creator of educational content teaching others through learning by doing one Star Wars plush cuddle at a time.

You might have seen some of my content across the web where I help others learn about Javascript, React, and the static web by creating [tutorials on YouTube](https://www.youtube.com/colbyfayock), writing about those tutorials on [spacejelly.dev](https://spacejelly.dev/), and I'm a course instructor with [egghead.io](https://egghead.io/instructors/colby-fayock?af=atzgap) and [Level Up Tutorials](https://www.leveluptutorials.com/tutorials/ecommerce-on-the-jamstack-with-snipcart-next-js-and-wordpress).

I bring this passion from my work tackling challenges like high scale video streaming services, ecommerce with [ThinkGeek](https://twitter.com/thinkgeek), satellite dashboards, and my community work with [Cloudinary](https://cloudinary.com/).

In addition to all of my other work, I've published two books [Jamstack Handbook](https://jamstackhandbook.com/) — which includes everything you need to know about the Jamstack with 3 step-by-step tutorials — and [50 Projects for React and the Static Web](https://50reactprojects.com/) — which is a free ebook that includes 50 project ideas complete with project briefs, resources, and even design layout ideas.

You can also find me on [Twitter at @colbyfayock](https://twitter.com/colbyfayock) and [YouTube at @colbyfayock](https://youtube.com/colbyfayock) as well!

## 🧰 Before the Workshop

There are a few things you'll want to make sure you'll have prepped before we jump into the workshop.

First off, you'll want to make sure that you meet the miminum environment requirements in the section below. Basically, you should be able to use npm for working with projects locally on your machine.

You'll also want to make sure you have signed up for a free acount with the following:
- [GitHub](https://github.com/)
- [Netlify](https://netlify.com/)
- [Cloudinary](https://cloudinary.com/)

While you _can_ do these things during the workshop, you risk the chance that you'll fall behind while we're working through the curriculum.

### Environment Requirements

There are three things that are probably considered "strict" requirements for the workshop:
* [node](https://nodejs.org/en/)
* [git](https://git-scm.com/)
* Signed in to GitHub in your local environment

This means that you should have basic familiar with a terminal as we'll be using it to run commands.

> ℹ️ Note: if you're more comfortable with a Git GUI and are signed into GitHub, you should be able to follow along with that!

> 💡 Tip: Not sure how to use a terminal? You still might be able to follow along, see how with [Getting Started Without a Terminal](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/help/Getting%20Started%20Without%20a%20Terminal.md)

The **operating system** you use shouldn't matter as long as you can run commands with npm (or yarn if that's your thing).

If you can run `npm -v` and `git --version`, you should be good to go.

If you run `ssh -T git@github.com`, you can confirm that your GitHub account is logged in, otherwise check out their [guide on github.com](https://docs.github.com/en/get-started/quickstart/set-up-git).

You can confirm you're development environment is ready to go by using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) to test creating a new Next.js app.

```
npx create-next-app
# or
yarn create next-app
```

We'll be doing something similar to start off our project and if that works, the rest should work!

### Setting Up the Project

For our project, we're going to be starting from "scratch".

Scratch is importantly in quotes, as we'll be creating a new project using a Starter template so that we can focus on learning how to integrate the tools of the workshop instead of building an interface around it.

If you want to start this project ahead of time to start poking around or even cusotmize it a bit to your liking, you can get started with:

```
npx create-next-app my-online-store -e https://github.com/colbyfayock/media-ecommerce-workshop-starter
# or
yarn create next-app my-online-store -e https://github.com/colbyfayock/media-ecommerce-workshop-starter
```

## 🖥 The Workshop

### Lessons Structure

There are two primary directories in this repository: demo and lessons.

The demo is what it sounds like, it's the project that we're going to be striving toward to build. It exists to give you an idea of what to expect and even help you out along the way. I'd highly recommend _not_ using it as a way to get the answers to each lesson, but as a way to get yourself unstuck if all else fails.

The lessons directory includes a bunch of markdown files which includes instructions for how we'll progress through the workshop. There will be a mix of exercises that we'll work through together, but also some extra credit that you can work through on your own if you want to take things a step further.

As far as the project we'll create and work through together, you're welcome to choose where you run the Create Next App command, whether that's outside of this repository or within it. A good rule of thumb might be to create the project where you would typically create new web apps or sites.

[Head over to Lessons](https://github.com/colbyfayock/media-ecommerce-workshop/tree/main/lessons) to get started!


## 🎓 After the Workshop

### Feedback

The good, the bad -- I want to know! I would really appreciate you taking any time to hop in this survey and be honest about your experience with the workshop. Please take into consideration both how much you've enjoyed the workshop and how much you felt you've learned.

[Take the survey!](https://forms.gle/syzLdDJTFKAuSGkC9) (https://forms.gle/syzLdDJTFKAuSGkC9)

P.S. The form is anonymous unless you decide to provide contact details to follow up with.

### More Learning

Looking to take what you've learned to another level? Check out my course [Ecommerce Product Management & Storefront with GraphCMS, Snipcart, & Next.js](https://egghead.io/courses/ecommerce-product-management-storefront-with-graphcms-snipcart-next-js-13cc0534?af=atzgap) where I show you how to build a full stack Next.js ecommerce app including a full end-to-end cart, product management with a GraphQL API, and optimized media with Cloudinary.

<https://egghead.io/courses/ecommerce-product-management-storefront-with-graphcms-snipcart-next-js-13cc0534?af=atzgap>
