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

Here's a twist though... Twitter not only requires an image when defining meta tags, it requires a title. This isn't something we can automatically grab, so we want to also define a title value with our component:

```jsx
<CldOgImage
  twitterTitle={`${product.name} - Space Jelly Gear`}
```

This is the title that will show up below the image when sharing on Twitter. You can use the same dynamic value that you would use with your standard `<title>` tag or you can make this completely custom.

> Tip: You could alternatively add excludeTags={['twitter:title']} which will prevent that tag from being rendered, allowing you to manage it outside of the component, but for the Twitter card to work, you must specify it _somewhere_.

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


### 2. Adding a product's image to the dynamic social card

Now that we have the base of our social media card

#### Getting Started

```jsx
<CldOgImage
  ...
  overlays={[
    {
      publicId: product.image.replace(/^\//, '').replace(/\//g, ':'),
      crop: 'fill',
      width: 1200,
      height: 1200,
      position: {
        flags: 'layer_apply',
        gravity: 'west'
      }
    }
  ]}
```


#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


### 3. Using text overlays to add dynamic product info



#### Getting Started

```jsx
<CldOgImage
  ...
  overlays={[
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
        flags: 'layer_apply',
        gravity: 'north_west',
        x: 1340,
        y: 140
      }
    }
  ]}
```

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)



### 4. Using text overlays to add the store's name



#### Getting Started

```jsx
<CldOgImage
  ...
  overlays={[
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

#### Where We'll Make Changes
* `src/pages/[productId].js`

#### Resources
* [Next Cloudinary CldOgImage](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)


## Next Lesson

* [Bonus 01 - Automatic image optimization with Cloudinary Netlify Plugin](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/Bonus:%2001%20-%20Automatic%20image%20optimization%20with%20Cloudinary%20Netlify%20Plugin.md)
* [The End](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/The%20End.md)
