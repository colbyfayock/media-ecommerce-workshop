# 📓 Lesson 06: Using the Next.js Image component with Cloudinary

Using the Cloudinary SDK gives us a lot of tools for working with images, but you might be wondering, what about the [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)?

While Cloudinary has its own [React SDK](https://cloudinary.com/documentation/react_integration) that includes both an AdvancedImage and AdvancedVideo component, we can still take advantage of some of the feature built right into Next.js.

## What to Expect

The Next.js Image Component comes with a lot of features for helping to optimize our image loading including lazy loading, reducing content shifts, and responsive sizing.

We'll dig into how we can use the Image component combined with Cloudinary to deliver great experiences.

## Objectives
* Using the Next.js Image Component with Cloudinary domains
* Configure the Next.js Image Component to use the Cloudinary loader
* Setting up responsive images with sizes prop

## Exercises

### 1. Using the Next.js Image Component to serve images from Cloudinary

The Next.js Image Component is already available when using Next.js, which gives us an easy way to opt-in to baked-in features.

#### Getting Started

Since it's already available we don't need to install it, however, we do need to import it.

Inside `src/pages/index.js` add:

```
import Image from 'next/image';
```

With it imported, we can simple change our `<img` to `<Image` and we're done. ✅

Update our product images to use the `<Image` tag:

```
<Image width="500" height="500" src={cld.image(product.image).resize('c_scale,w_900').format('auto').delivery('q_auto').toURL()} alt="" />
```

...but, if you try to load that, you'll get an error.

By default, Next.js won't allow you to serve remote images unless you allow them, so we also need to configure our Cloudinary URLs to work.

Inside of `next.config.js`, add a new property of `images` with the following:

```
images: {
  domains: ['res.cloudinary.com']
}
```

After changing `next.config.js` you'll need to restart your development server, but once you do, you'll see your images loading again, this time being served using the Next.js Image Component.

Make sure to do the same with the banner at the top of the page, optimizing for the size it's being used!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [next/image](https://nextjs.org/docs/api-reference/next/image)
* [next/image Domains](https://nextjs.org/docs/api-reference/next/image#domains)


### 2. Using the built-in Cloudinary loader with the Image component

While we're now using the Image component, something funny is happening.

Our images are being served from `/_next/image` which is a serverless function. That function re-optimizes our image, basically doubling up the work we're doing with Cloudinary. It also reduces the how much we can leverage from Cloudinary when optimizing loading of our images.

The good news is Cloudinary has a built-in Loader allowing us to still deliver straight from Cloudinary while using the Image component.

#### Getting Started

Opting to Loaders are an easy change, where back inside of `next.config.js`, we want to update our `images` property to:

```
images: {
  loader: 'cloudinary',
  path: `https://res.cloudinary.com/<Your Cloud Name>/image/upload`
}
```

We tell Next.js we want to use the Cloudinary loader and specify the path we want the images delivered from.

But that's not all. Because we're specifying the base path, we can no longer use the Cloudinary SDK, as that gives the full path, where we only want to pass in the Public ID.

Yup, that means undoing the work of the previous lesson and passing in the Public ID to the Image component:

```
<Image width="500" height="500" src={product.image} alt="" />
```

And you'll notice the images are back to being served from Cloudinary, but now by using the Next.js Image Component.

> 💡 Tip: While we undid the previous lesson, it was important to help us understand how Cloudinary URLs are constructed combined with the features provided under the hood. This will be useful for understanding how Next.js makes some of it's features work with Cloudinary along with how you could use that knowledge in other use cases where the Next.js Image Component might not make sense.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Next.js Image Loaders](https://nextjs.org/docs/basic-features/image-optimization#loaders)


### 3. Delivering images responsively with the sizes prop

One of the awesome features we get out-of-the-box with the Next.js Image Component is responsive sizing.

What's exciting about this is if we're serving small images on a mobile device but huge images on a large monitor (or the opposite), we don't have to waste precious resources by delivering that big image eveywhere.

We can tell Next.js to deliver responsively as well as configure the sizes we need to the viewports we need and the browser handles the rest.

#### Getting Started

Starting with the banner, which will be the easiest, where we just want that to scale with the browser.

Simply add the prop `layout="responsive"` like:

```
<Image
  className={styles.heroImage}
  width="1200"
  height="400"
  src="/images/space-jelly-gear-banner_jn6w1j"
  alt=""
  layout="responsive"
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
  layout="responsive"
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