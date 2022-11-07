# 📓 Lesson 06: Connect and deploy project from GitHub to Netlify

As we mentioned in the previous lesson, we'll be using [Netlify](https://netlify.com/) to actually deploy our application. This will give us a way to easily get our project built, deployed, and available for anyone in the world to see.

On top of that, it has a ton of other great features that make collaborative work great such as deploy previews, where if you create a Pull Request, Netlify by default will automatically create a new deployment with those changes! While we're only going to gover the main deployment flow, there's a lot more you can get into with this tool.

## What to Expect

In this lessson, our overall goal is to deploy our application to the world!

Because we already have our application set up in a GitHub repository, Netlify makes this easy to connect where any new changes we push our automatically get deployed.

## Objectives
* Create a new Netlify site connected to a GitHub repository
* Deploy a Netlify site
* Review Next.js on Netlify
* Customizing the Netlify Site subdomain

## Exercises

### 1. Connecting the GitHub repository to Netlify

With our GitHub repository ready to go, we're all set to get started with Netlify.

Using your Netlify account, we'll create a new Netlify Site where we'll use GitHub's oAuth integration to authenticate and give Netlify access to our project repository.

#### Getting Started

Add a new Netlify site using your new GitHub repository.

Once you select your repository, Netlify will ask you for some configuration settings, but you'll also notice that Netlify was able to detect it's a Next.js project and will even install the plugin for you.

Netlify is set up to make deploying Next.js easy, so we don't need to touch any of the configurations, and we can just click Deploy!

#### Resources
* [A Step-by-Step Guide: Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

### 2. Setting up a custom Netlify subdomain

When creating a new Netlify site, Netlify uses a unique, randomly generated string so that the project can be available on the web without conflicting with someone else's project.

But we don't have to live with that subdomain, we can customize it to be whatever we want! (As long as it's unique).

#### Getting Started

Customize the Netlify site subdomain to your store's name.

#### Where We'll Make Changes

* Netlify > Site Settings > Domain Management > Custom Domains

## Next Lesson

[07 - Generating a Dynamic Social Media Open Graph Image](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/07%20-%20Generating%20a%20Dynamic%20Social%20Media%20Open%20Graph%20Image.md)
