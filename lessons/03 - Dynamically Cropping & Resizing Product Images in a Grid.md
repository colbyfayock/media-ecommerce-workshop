# 📓 Lesson 03: Dynamically Cropping & Resizing Product Images in a Grid

Our homepage includes a grid of products, showing some of our featured items, but a few of them are a little oddly shaped, particularly, one is a bit tall and one is a bit wide.

This isn't always a dealbreaker, but having a uniform layout of images helps make it easier for people to scan through a list of images, as well as avoiding uneven empty space between multiple rows.

## What to Expect

Cloudinary gives us multiple options for how we crop our images, first taking a standard width and height, along with a crop mode, which tells Cloudinary how it wants us to trim the extra space.

Some popular options include fill, which will fill up all of the available space in the width and height with the image, or scale, which will use the width and height "as is", which may or may not retain the image's original aspect ratio depending on the sizes used.

We'll use the fill option to make sure our images take up the entire image, maintain the correct ratio, and give us a great uniform look in our product grid.

## Objectives

* Cropping all product images to a square
* Using gravity to dynamically change how an image is cropped

## Exercises

### 1. Cropping all images to a square

Right now, our image dimensions are being supplied by our product data, including the actual image width and height, but we want to make them all square.

#### Getting Started

First, let's replace the width and the height of our product images with the same values:

```jsx
<CldImage
  width="600"
  height="600"
```

> 💡 Tip: 600 is somewhat arbitrary. The specific size we use here won't matter _as much_ since we're using responsive sizing, but generally you want to use the sizing that makes the most sense for your app!

Now if you reload the page, you'll notice, nothing happened...

The way that the Next.js Image component works, which the CldImage component maintains for consistency, is the width is only used with a crop mode of "limit", meaning, we're setting the largest width an image can have as 600 (or the responsive size), but if it's smaller, it won't upscale. Further, because we're using that crop mode of limit, we don't need to pass in a height, as it maintains its aspect ratio.

For instance, if in a Cloudinary URL, we're using a crop mode of limit and a width of 600, the following will occur:
* Width 1200: resize to 600 (resize to the limit)
* Width 600: nothing (same size)
* Width 400: nothing (will not upscale)

To change this, we want to use a crop mode of fill so that we're taking up all of the space in our given width and height and actually use that ratio defined:

```jsx
<CldImage
  width="600"
  height="600"
  crop="fill"
```

And now we have a bunch of square images!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary - Resizing & Cropping](https://cloudinary.com/documentation/resizing_and_cropping)

### 2. Dynamic crop positioning with gravity

Cropping is tricky when dealing with images, as you may not always know where the subject of the image is located.

Cloudinary uses gravity to define where a crop occurs, going beyond static locations like the top or bottom corners, using AI to automatically figure out where the subject is, and crop to that location.

#### Getting Started

By default, CldImage uses a gravity of "auto" meaning it will automatically determine where the main subject is and use that as the positioning.

That means, we actually don't need to do anything.

But to get a better idea of what's happening, let's try changing the gravity.

If no gravity is provided to an iamge, the gravity will default to "center", so let's first see what happens when adding a gravity prop to that value:

```jsx
<CldImage
  gravity="center"
  ...
```

Most of our images we won't notice a difference, but pay attention to the model wearing a hat.

Originally, the image was cropped with the hat closer to the center, but now the hat is a little cut off and towards the top of the image. Not ideal!

We can try other values for gravity as well, using compass-based locations like `north`, `north_west`, or `south_east`.

Let's try:

```jsx
<CldImage
  gravity="south_east"
  ...
```

Again, not ideal!

We much prefer our gravity set to "auto", which we can certainly set manually, but since its the default, we can just leave off the `gravity` prop!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cloudinary - Gravity](https://cloudinary.com/documentation/resizing_and_cropping#control_gravity)

## Next Lesson

[04 - Adding Image Badges & Text as Overlays](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/04%20-%20Adding%20Image%20Badges%20%26%20Text%20as%20Overlays.md)
