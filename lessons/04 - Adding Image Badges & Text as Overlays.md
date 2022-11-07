# 📓 Lesson 04: Adding Image Badges & Text as Overlays

It's common when running an online store to put products on sale or feature them a bit differently when they're new.

We can use little badges to do this, including a red circle with the word "SALE" in it, as well as other things like a "NEW" badge.

While CSS could work for this kind of thing, it can get tricky dealing with that text, especially responsively, so instead, we can use Cloudinary to handle this easily for us.

## What to Expect

The CldImage component can use [overlays](https://cloudinary.com/documentation/layers) to position existing images on top of our base image.

We can do this by defining what that image is and positioning it exactly how we want it on the image.

## Objectives

* Add a sales badge to products
* Only add a sales badge to products on sale
* Use text to add dynamic sale data to a badge

## Exercises

### 1. Adding a sales badge graphic on products

With the CldImage component, we can use the overlays prop to add any image we want on top of our existing image.

We can do this by either specifying a public ID with a Cloudinary image or using a remote URL which will get fetched, just like we're currently doing with our base image.

#### Getting Started

First use the overlays prop to add a new overlay:

```jsx
<CldImage
  ...
  overlays={{
    url: 'https://user-images.githubusercontent.com/1045274/199872380-ced2b84d-fce4-4fc9-9e76-48cb4a7fb35f.png',
    width: 250,
    height: 250,
    position: {
      gravity: 'north_east',
      x: 50,
      y: 50,
      angle: 15
    }
  }}
```

We're defining the remote source along with its size and positioning.

We're even adding a little bit of an angle to rotate it slightly at the top of our image.

Once in the browser, we can see our new sales badge!

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Next Cloudinary Image Overlays](https://next-cloudinary.spacejelly.dev/use-cases/image-overlays)

### 2. Only adding a badge to items on sale

The sales badges are great, but not all of our items are actually on sale.

We want to make sure we're accurate with our badges and only show them where needed.

#### Getting Started

We're going to first lift up the overlay configuration in our `map` statement to define our overlays only if needed.

```jsx
{FEATURED_PRODUCTS.map(productId => {
  const product = products.find(({ id }) => id === productId);
  const overlays = [];

  if ( product.sale > 0 ) {
    overlays.push({
      url: 'https://user-images.githubusercontent.com/1045274/199872380-ced2b84d-fce4-4fc9-9e76-48cb4a7fb35f.png',
      width: 400,
      height: 400,
      position: {
        gravity: 'north_east',
        x: 50,
        y: 50,
        angle: 15
      }
    });
  }
```

Then we want to update our overlay prop to reference that prop:

```jsx
<CldImage
  overlays={overlays}
  ...
/>
```

And now we're only showing our slaes badge for the right products.

#### Where We'll Make Changes
* `src/pages/index.js`

### 3. Adding sale details on a generic badge

Showing that our products are simply on sale is great, but we could drive greater urgency by showing how much it's on sale.

To do this, we can create two overlays instead of one, using one layer as a generic badge with no text, and a second dynamic layer.

#### Getting Started

To start, we need to update our existing badge to a generic one.

Let's update our overlay's badge URL to:

```jsx
url: 'https://user-images.githubusercontent.com/1045274/199878003-6b54e65f-7d23-413d-a48d-5c88d74652e3.png',
```

Next, we can add our dynamic text.

The sale data inside of `products.json` has the percentage that the active value is compared to the original, so we can can show that displayed as a percentage.

Add the following still inside of the sale check, to push a second overlay layer:

```jsx
overlays.push({
  width: 350,
  crop: 'fit',
  position: {
    gravity: 'north_east',
    x: 120,
    y: 180,
    angle: 15
  },
  text: {
    color: 'white',
    fontFamily: 'Source Sans Pro',
    fontSize: 140,
    fontWeight: 'bold',
    text: `${product.sale * 100}%`,
    alignment: 'center'
  }
});
```

Here, we're defining an overlay similar to our image, but instead of a public ID or URL, we're defining a text object with our font settings and text.

And now we're dynamically showing the sale percentage for our products.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Next Cloudinary - Text Overlays](https://next-cloudinary.spacejelly.dev/use-cases/text-overlays)

## Next Lesson

[05 - Create a new GitHub repository and link local project](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/05%20-%20Create%20a%20new%20GitHub%20repository%20and%20link%20local%20project.md)
