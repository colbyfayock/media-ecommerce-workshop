# 📓 Lesson 05: Delivering images from Cloudinary with the JS URL Gen SDK

While using the Netlify plugin allows us to serve our images from Cloudinary, we're limited by how much we can fully take advantage of the Cloudinary feature set.

By using a Cloudinary SDK in the application layer, we can use all of the [transformations](https://cloudinary.com/documentation/image_transformations) that take working with images beyond [optimization](https://cloudinary.com/documentation/image_optimization), using tools like on-the-fly cropping and AI to build great experiences.

## Getting Started

In this lesson we'll learn how we can serve our images directly from Cloudinary from within our Next.js app.

We already have our images uploaded to our account from the previous lesson, which happened automatically, but we'll upload those images again so we can learn how to add the assets ourselves and then set them up in the app.

Once they're available in our Media Library, we'll then use the Cloudinary JS URL Gen SDK to deliver them and learn about some of the powerful transformations we can use.

Technically, we could disable the Cloudinary Netlify Plugin at this point, but leaving it on helps make sure we're delivering _all_ assets in a performant way if they haven't been migrated to the SDK.

## Objectives
* Upload images to Cloudinary
* Install and configure the Cloudinary JS URL Gen SDK
* Generate image URLs with the Cloudinary SDK
* Optimize images with the Cloudinary SDK
* Resizing images on-the-fly with the Cloudinary SDK

## Exercises

### 1. Uploading images to Cloudinary

In order to deliver our images from Cloudinary, they need to be available there.

#### Getting Started

First, upload all of our images to our Media Library. All of the images we want to use are inside of `public/images` where we can simply drag them all from our desktop into the Media Library.

Once uploaded, we need to update the references to our images.

Inside of `src/data/projects.json`, we can update the `image` field of each product to reference our new image location.

Each image uploaded to your Cloudinary Media Library has a Public ID, so we'll want to use that ID.

For example, if your public ID is `cool-skater_1234`, then your `image` field would be `cool-skater_1234`.

If your public ID is `cool-surfer_abcd` and is in the folder `images`, the `image` field would be `images/cool-surfer_abcd`.

Update all products to your new public IDs.

#### Where We'll Make Changes
* Cloudinary > Media Library
* `src/data/products.json`

#### Resources
* [Cloudinary Media Library Upload](https://cloudinary.com/documentation/media_library_upload_tutorial)


### 2. Set up the Cloudinary JS URL Gen SDK

Now that we have our images uploaded, we can use an SDK to easily pass in our Public ID as a reference, and have the SDK generate URLs for us. But first we need to install that SDK.

#### Getting Started

Starting with installation, let's first run the install command in our terminal:

```
yarn add @cloudinary/url-gen
# or
npm install @cloudinary/url-gen
```

Once it's complete, we can start using the SDK by importing it into our project.

We can start with the homepage by adding the following to the top of `src/pages/index.js`:

```
import { Cloudinary } from '@cloudinary/url-gen';
```

Then we need to create a new instance of our SDK by passing in our Cloud Name:

```
const cld = new Cloudinary({
  cloud: {
    cloudName: '<Your Cloud Name>'
  }
});
```

And now we're ready to create URLs to deliver images!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary JS URL Gen SDK Installation](https://github.com/cloudinary/js-url-gen#installation)


### 3. Set up the Cloudinary JS URL Gen SDK

Step #1 we uploaded our images and fixed product references and in step #2 we set up our SDK. Now let's use it!

#### Getting Started

The basis of creating an image URL is the `cld.image` method, where we can pass in our Public ID and the SDK does the rest.

Update the `img` tag in our Products loop (`.map` function) to use a new Cloudinary image:

```
<img width="500" height="500" src={cld.image(product.image).toURL()} alt="" />
```

Notice here `src={cld.image(product.image).toURL()}` where we create a new `cld.image` instance with our image reference then turn that instance to a URL.

When opening up the browser, we'll see our images being served from Cloudinary URLs:

```
https://res.cloudinary.com/<Your Cloud>/image/upload/v1/images/<Your Public ID>
```

And our homepage product images should now be delivered from Cloudinary!

We can do the same thing with the hero banner, where using the ID from our Media Library, we can update it with:

```
<img className={styles.heroImage} src={cld.image('<Banner Public ID'>).toURL()} alt="" />
```

And again, just like that, our banner is now served by Cloudinary!

#### Where We'll Make Changes
* `src/pages/index.js`


### 4. Image optimization with modern formats and compression

By using Cloudinary, we automatically use a performant CDN to deliver our assets, but we don't automatically optimize them. We need to opt-in to optimization, which is as simple as a quick additional parameter.

#### Getting Started

The `cld.image` instance allows us to chain on transformations to manipulate our images. As long as we chain them before `toURL` they'll be applied to that final URL.

> 💡 Tip: Before setting up optimization, take a look at the network requests in your browser, specifically noting the size of the images and formats being delivered. This will help you understand how much of an impact it makes!

Update all `cld.image` instance to include `.format('auto')` and `.delivery('q_auto')` like:

```
<img width="500" height="500" src={cld.image(product.image).format('auto').delivery('q_auto').toURL()} alt="" />
```

You'll notice your URLs now look like:

```
https://res.cloudinary.com/<Your Cloud>/image/upload/f_auto/q_auto/v1/images/<Your Public ID>
```

The `f_auto` parameter tells Cloudinary to automatically detect the best format (JPG, PNG, WebP, AVIF) and deliver that to the browser. Often it'll be AVIF if the browser supports it.

The `q_auto` parameter tells Cloudinary to automatically compress the image to a point where it won't make a human perceivable difference.

This means Cloudinary automatically optimizes your images to ensure you're maximizing performance.

> 💡 Tip: Take another look at your network requests in your browser and notice the different with size and formats! You can remove the parameters and add them again if you forget what it looked like before.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary Image Optimization](https://cloudinary.com/documentation/image_optimization)


### 5. Resizing images on-the-fly with the Cloudinary SDK

Optimizing images is one thing, but delivering images that are bigger than what you actually need means you're sending wasted pixels.

The good news is we can reduce the size with a simple parameter while maintaining our original uploaded image.

#### Getting Started

Just like the parameters in Step 4, we're going to resize our images by adding another chained method to `cld.image`.

Add the `.resize('c_scale,w_900`)` to the product images like:

```
<img width="500" height="500" src={cld.image(product.image).resize('c_scale,w_900').format('auto').delivery('q_auto').toURL()} alt="" />
```

If you look in the browser, you'll notice the images are now an even smaller size and the final URL will include those new parameters:

```
https://res.cloudinary.com/<Your Cloud>/image/upload/f_auto/q_auto/c_scale,w_900/v1/images/<Your Public ID>
```

> ℹ️ Note: We're using 900 because that's approximately the biggest size the app is currently showing product images on the homepage. Later we'll learn how to serve these responsively so we can serve the smallest size for different viewports!

The `c_scale` parameter tells Cloudinary we want our "crop" to scale with the original image.

The `w_900` parameter tells Cloudinary we want our final width to be 900px and because we used `c_scale`, Cloudinary will preserve the aspect ratio, meaning we don't need to specify the height.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary Image resizing and cropping](https://cloudinary.com/documentation/resizing_and_cropping)


## Next Lesson

[06 - Using the Next.js Image component with Cloudinary](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/06%20-%20Using%20the%20Next.js%20Image%20component%20with%20Cloudinary.md)
