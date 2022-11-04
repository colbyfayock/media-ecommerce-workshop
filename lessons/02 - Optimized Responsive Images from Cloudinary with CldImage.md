# 📓 Lesson 02: Optimized, Responsive Images from Cloudinary with CldImage

Images are a critical part of any website or application, especially an online store, where we want to be sure we give our potential customers a way to see our amazing products, but images can be large and by default, loaded in a way that blocks the rest of the page from loading quickly.

That's where Cloudinary comes in, where we can take advantage of automatic optimization that both delivers the most modern format to the browser requesting and compresses images to a point that's not visually different.

In our app, we'll use Next Cloudinary, the Next.js integration for Cloudinary, in order to deliver images in our app, where we'll see later that includes all of the [transformations](https://cloudinary.com/documentation/image_transformations) that take working with images beyond [optimization](https://cloudinary.com/documentation/image_optimization), using tools like on-the-fly cropping and AI to build great experiences.

## What to Expect

First things first, before we dive into the plugin we'll need a Cloudinary account. Hopefully at this point you already have an account set up, but if you don't, be sure to head over to [cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)

> ℹ️ Note: When selecting a Cloudinary product during account creation, be sure to select Programmable Media!

The CldImage Component comes with a lot of features for helping to optimize our image loading including lazy loading, reducing content shifts, and responsive sizing.

While some of these features work out-of-the-box with the Next.js Image component, we can extend those features and take them to another levle by using Cloudinary tech.

We'll dig into how we can use the CldImage component to deliver great experiences.

## Objectives

* Installing Next Cloudinary
* Using the CldImage component
* Delivering remote images with the fetch API
* Setting up responsive images with sizes prop

## Exercises

### 1. Installing and configuring Next Cloudinary to a new Next.js app

The CldImage component, along with other tools, are made available through the Next Cloudinary package on npm. To get started, we'll install and configure our account.

#### Getting Started

First, install the Next Cloudinary library with:

```shell
yarn add next-cloudinary
# or
npm install next-cloudinary
```

Once installed, we need to make sure we configure our Cloudinary account to be used throughout the project. To do this, we can create an environment variable file and set up our Cloud Name.

Create a new file at the root of the project called `.env.local` and inside add:

```shell
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

> 💡 Tip: You can find your Cloudinary Cloud name on the Dashboard page once logged in.

#### Where We'll Make Changes
* Terminal
* `.env.local`

#### Resources
* [Next Cloudinary Installation](https://next-cloudinary.spacejelly.dev/installation)

### 2. Using the CldImage component to deliver images from Cloudinary

Now that we're all set up, we can start to deliver our images using cloudinary with the CldImage component.

#### Getting Started

To use the CldImage component, we need to import it into any page where we want to use it.

At the top of the homepage at `src/pages/index.js`, add:

```jsx
import { CldImage } from 'next-cloudinary';
```

Next we can use it to deliver our image.

Update all instances of the `Image` tag to `CldImage`, including the banner:

```jsx
<CldImage
  className={styles.heroImage}
  ...
```

And our product images:

```jsx
<div className={styles.productImage}>
  <CldImage
    ...
```

If we try to open up our browser, we'll notice... uh oh! our images aren't working!

The `CldImage` component by default takes in a Cloudinary Public ID (image ID) as the `src` prop where we're currently passing in an image URL.

But this is easily fixed using the [fetch API](https://cloudinary.com/documentation/fetch_remote_images) which we'll learn about in the next step.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [CldImage Basic Usage](https://next-cloudinary.spacejelly.dev/components/cldimage/basic-usage)

### 3. Delivering remote images from Cloudinary using the fetch API

The "standard" way to deliver images from Cloudinary is by using the public ID to reference images already in Cloudinary, but another way is to use the fetch API, which tells Cloudinary to download and store a remote image, then ultimately deliver it from the Cloudinary CDN.

> ℹ️ Note: We're using the fetch API in this tutorial, as it's an easier way to get everyone up and running and on the same page. You could alternatively upload all of your images to your Media Library and update the references to those locations.

#### Getting Started

In order to use the fetch API, the first thing we need to do is configure our account to allow us to use the fetch API.

Inside of Settings > Security > Restricted media types, we want to make sure the "Fetched URL" setting is **unchecked**.

Once unchecked, we can now update our CldImage instances to configure out delivery type to "fetch":

```jsx
<CldImage
  deliveryType="fetch"
  ...
```

And now we should see all of our images delivered from Cloudinary!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary - Delivering Remote Images](https://cloudinary.com/documentation/fetch_remote_images)

### 4. Responsive images with the sizes prop

One of the awesome features we get out-of-the-box with the Next.js Image component is responsive sizing.

But wait, aren't we using CldImage?

CldImage actually wraps the Next.js Image component, getting all of the features we love from the Image component, but leveling it up with Cloudinary tech, including features beyond what comes with the Image component.

Back to responsive sizing, what's exciting about this is if we're serving small images on a mobile device but huge images on a large monitor (or the opposite), we don't have to waste precious resources by delivering that big image eveywhere.

We can tell the CldImage component to deliver responsively based on the sizes and viewports we need and the browser handles the rest.

#### Getting Started

Starting with the banner, which will be the easiest, where we just want that to scale with the browser.

Simply add the prop `sizes="100w"` like:

```
<CldImage
  className={styles.heroImage}
  width="1200"
  height="400"
  src="https://user-images.githubusercontent.com/1045274/199860681-7f8c1de4-04fc-4015-9e0f-b351af53b4b4.jpg"
  alt=""
  sizes="100w"
/>
```

If you look in the browser's developer tools inspecting the HTML, you'll notice a `srcset` attribute with a ton of image and viewport sizes. This is what makes the responsive sizing work.

You can also look at the network requests while starting at the smallest viewport size and slowly scaling up, seeing new larger images load as it gets bigger. This is because it only loads an image as large as it needs.

Next let's do the product images.

This one's trickier because we're also changing how many columns that are showing as the browser scales up and down, meaning, it's not a simple responsive change.

Let's define sizes manually like:

```
<Image
  width="500"
  height="500"
  src={product.image}
  alt=""
  sizes="(min-width: 480px ) 50vw,
        (min-width: 728px) 33vw,
        (min-width: 976px) 25vw,
        100vw"
/>
```

By defining `sizes` we can control exactly what size gets delivered at what viewport.

> ℹ️ Note: These sizes aren't perfect, but it helps illustrate how this works.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
* [Next.js Image Sizes](https://nextjs.org/docs/api-reference/next/image#sizes)

## Next Lesson

[03 - Dynamically Cropping & Resizing Product Images in a Grid](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/03%20-%20Dynamically%20Cropping%20%26%20Resizing%20Product%20Images%20in%20a%20Grid.md)
