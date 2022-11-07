# 📓 Bonus 01: Automatic image optimization with Cloudinary Netlify Plugin

Now that we're set up on Netlify, we want to start working towards our goal of optimizing all of our static assets.

And because we're on Netlify, this is easy to do. Netlify allows plugins into its build process ([build plugins](https://docs.netlify.com/integrations/build-plugins/)) allowing services or really anyone to hook in and do some additional work.

That's exactly what's happening with the [Cloudinary Netlify Plugin](https://github.com/colbyfayock/netlify-plugin-cloudinary), where by enabling it with our Cloudinary account, we can get automated optimization for all our images.

## What to Expect



With our Cloudinary account, we can install the plugin right inside the UI, where once configured with our Cloudinary account, we'll be on our way to automatic image optimization!

## Objectives
* Install and configure the Cloudinary Netlify Plugin
* Create a Netlify file-based configuration for the plugin
* Configure the upload delivery type for Cloudinary
* Use an upload preset for tagging uploaded images

## Exercises

### 1. Install and configure the Cloudinary Netlify Plugin

In your new Netlify site, we want to install the Cloudinary plugin and then set up our Cloud Name configuration. This will allow us to easily add blanket optimization to our Netlify site's images.

#### Getting Started

First head to the Plugins section inside Netlify, search for Cloudinary, and click install and select the site you want to install on.

Once installed we need to configure our Cloud Name for Cloudinary, so head back to your Netlify Site then navigate to Site Settings > Build & Deploy > Environment > Environment Variables where you can then add the following environment variable:

```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

#### Where We'll Make Changes
* Netlify > Plugins > Search: "Cloudinary"
* Netlify > Site Settings > Build & Deploy > Environment > Environment Variables

#### Resources
* [Cloudinary Plugin on Netlify](https://app.netlify.com/plugins/netlify-plugin-cloudinary/install)
* [Cloudinary Netlify Plugin on GitHub](https://github.com/colbyfayock/netlify-plugin-cloudinary)


### 2. Setting up a file-based configuration with Netlify

In order to apply advanced configurations, we can use Netlify file-based configuration by creating a `netlify.toml` file at the root of our project.

#### Getting Started

First create the file `netlify.toml` in the root of your project (or where you configured your project location in Netlify, by default the root).

Once that file is created, we can specify that we want to use the plugin by adding:

```
[[plugins]]
  package = "netlify-plugin-cloudinary"
```

> 💡 Tip: We can also specify our Cloud Name here instead of an environment variable but because we'll later use other Cloudinary environment variables, it probably makes sense to leave it there.

#### Where We'll Make Changes
* `netlify.toml`

#### Resources
* [Netlify File-Based Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)


### 3. Using the Upload delivery type for Cloudinary assets with an Upload Preset

Cloudinary allows different [Delivery Types](https://cloudinary.com/documentation/image_transformations#delivery_types) which change how your assets are served to your customers.

By default, the plugin uses the Fetch method which is an easy way to get remote images served from Cloudinary, but using the Upload method gives us access to advanced capabilites.

Two of those is using Signed Uploads and specifying an Upload Preset for making changes upon upload.

> ℹ️ Note: We're combining the Upload Preset work here as we want to make sure when our assets are uploaded the first time, they use the Upload Preset, otherwise it won't work again until new assets are uploaded, as the plugin tries to avoid re-uploading existing imgaes.

#### Getting Started

First we'll create an Upload preset by heading to our Cloudinary Settings > Upload > Upload Presets where we can now create a preset.

Select Add Upload Preset where we can then configure out Upload Preset to make changes or configuration on any newly uploaded assets that use this preset

We can do things like:
* Change Name: Optionally change the name of the preset to something readable
* Change Folder: Want these uploaded to a specific folder in Cloudinary for organization? Set that under Folder
* Add Tags: Click Media analysis and AI then under Tags add `netlify-site` and / or whatever tags you'd like to test this out with

We can also use [Google Auto Tagging](https://cloudinary.com/documentation/google_auto_tagging_addon) or other add-on options to automatically analyze the image and add tags that identify what's in the image!

To enable auto-tagging, click Media analysis and AI then under Tags and Categorization, select Google Auto Tagging.

Finally, click Save on your new Upload Preset.

We also need to enable the Auto Tagging add-on to work, so head to Settings > Add-Ons, find Google Auto Tagging, click on Free, and select Agree on the notice.

> ℹ️ Note: Add-ons have a separate cost associated with them beyond the typical Cloudinary usage. Be sure to keep an eye on usage!

Now that we have our Upload Preset, we can use it in our configuration.

Inside `netlify.toml` update the plugin configuration to:

```
[[plugins]]
  package = "netlify-plugin-cloudinary"

  [plugins.inputs]
  deliveryType = "upload"
  uploadPreset = "[Your Cloudinary Upload Preset]"
```

Lastly, because we're now using signed uploads, we need to include two new environment variables in Netlify, our API Key and API Secret.

Inside Netlify > Site Settings > Build & Deploy > Environment > Environment Variables, add:
```
CLOUDINARY_API_KEY="[Your Cloudinary API Key]"
CLOUDINARY_API_SECRET="[Your Cloudinary API Secret]"
```

#### Where We'll Make Changes
* Cloudinary > Settings > Upload > Upload Preset
* `netlify.toml`
* Netlify > Site Settings > Build & Deploy > Environment > Environment Variables

#### Resources
* [Cloudinary Delivery Types](https://cloudinary.com/documentation/image_transformations#delivery_types)
* [Cloudinary Add-Ons](https://cloudinary.com/addons)


## Next Lesson

[The End](https://github.com/colbyfayock/media-ecommerce-workshop/blob/main/lessons/The%20End.md)
