# 📓 Lesson 07: Generating a Dynamic Social Media Open Graph Image

Social media is a huge driver in getting people's attention focused to your products. Whenever we post something (or something is shared by our customers), we want to have as much visual impact as we can, including large images to capture that attention in the limited virtual real estate of people's social media feeds.

We can achieve this by generating dynamic social media images that showcase our products and a little bit of info using the Open Graph standard and Twitter cards.

## What to Expect

The CldOgImage component can use the same APIs as the CldImage component to dynamically build images using simple effects as well as image and text overlays. Once that image is generated, the component drops in open graph tags into the Head of the page, allowing social media sites the ability to scrape those tags, and use the image.

This allows us to position our product on our image as well as the info we want to share about that product.

## Objectives

* Creating a base Open Graph image
* Adding a product image to the social card
* Overlaying product info
* Overlaying store name

## Exercises

### 1. Creating a base Open Graph image from a template

We could start from scratch, a blank canvas, but we want to start off with a little bit of a visual background, helping to give a template to laying out our imagery and product info.

We can use the CldOgImage component to quickly create our starting point of an Open Graph image that uses a template as the source.

#### Getting Started

The Next Cloudinary library that we installed in Lesson 2 already includes out CldOgImage component, so the first step is to import it!

At the top of the homepage at `src/pages/index.js`, add:

```jsx
import { CldOgImage } from 'next-cloudinary';
```

The CldOgImage component uses the same API as the CldImage component, only we don't need to pass in our width and height as they're already configured by default, so we pretty much only need to add our source:

```jsx
<CldOgImage
  src="https://user-images.githubusercontent.com/1045274/199742477-3a683f54-915b-463d-95a2-8ac584db7240.png"
  deliveryType="fetch"
/>
```

> Note: Remember we're using the deliveryType of fetch along with a public URL to make it easier to follow along, but usually you'd reference an image from within your Cloudinary account.

Here's a twist... Twitter not only requires an image when defining meta tags, it requires a title. This isn't something we can automatically grab, so we want to also define a title value with our component:

```jsx
<CldOgImage
  ...
  twitterTitle={`${product.name} - Space Jelly Gear`}
```

This is the title that will show up below the image when sharing on Twitter. You can use the same dynamic value that you would use with your standard `<title>` tag or you can make this completely custom.

> Tip: You could alternatively add excludeTags={['twitter:title']} which will prevent that tag from being rendered, allowing you to manage it outside of the component, but for the Twitter card to work, you must specify it _somewhere_.

Now how do you see all of this? Well, the web inspector of course!

We can use the Developer Tools of our favorite browser, inspect the tags in our head, and use that to copy the URL and make sure it's working as expect.

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


### 2. Adding a product's image to the dynamic social card

Now that we have the base of our social media card, we can start having some fun adding the actual content.

#### Getting Started

First up is the product image, arguably the most important thing here.

We can use overlays, just like we did when adding the sale badge, to add our product image.

```jsx
<CldOgImage
  ...
  overlays={[
    {
      url: product.image,
      crop: 'fill',
      width: 1200,
      height: 1200,
      position: {
        gravity: 'west'
      }
    },
  ]}
```

Here we're grabbing the image URL and overlaying it onto our base image. We set a gravity to "west", anchoring it to the left side, and call it a day!

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


### 3. Using text overlays to add dynamic product info

We're at a solid place with our base image and the product image, but we want to give a _little_ bit more info.

We can overlay some text, similar to an image, but based off of the product name.

#### Getting Started

On our same instance of CldOgImage, let's add a new overlay object to our existing array with a text object this time:

```jsx
<CldOgImage
  ...
  overlays={[
    ...
    {
      text: {
        text: product.name,
        fontFamily: 'Source Sans Pro',
        fontSize: 96,
        fontWeight: 'bold'
      },
      crop: 'fit',
      width: 920,
      position: {
        gravity: 'north_west',
        x: 1340,
        y: 140
      }
    }
  ]}
```

We have some options for how we style out text, just like you might expect in CSS, but we then can position it based on the top left corner (or wherever you prefer) and use a width with a crop of "fit" to handle any titles that might hang down on multiple lines.

And with that we have our product name on our social card!

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


### 4. Using text overlays to add the store's name

Now for some branding. We want to sell that our gear is exclusive!

#### Getting Started

We'll use the same technique for adding a text overlay with a slightly different style:

```jsx
<CldOgImage
  ...
  overlays={[
    ...
    {
      text: {
        text: 'Only on Space Jelly Gear!',
        color: 'rgb:24292F',
        fontFamily: 'Source Sans Pro',
        fontSize: 48,
        fontWeight: 'bold'
      },
      crop: 'fit',
      width: 920,
      position: {
        gravity: 'north_west',
        x: 1340,
        y: 250
      }
    }
  ]}
```

Now only can we change the weight and size, we can change the color! So with that, along with positioning to keep it below the product name, we have our new text ready to go!

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


## Next Lesson

* [Bonus 01 - Automatic image optimization with Cloudinary Netlify Plugin](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/Bonus:%2001%20-%20Automatic%20image%20optimization%20with%20Cloudinary%20Netlify%20Plugin.md)
* [The End](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/The%20End.md)
