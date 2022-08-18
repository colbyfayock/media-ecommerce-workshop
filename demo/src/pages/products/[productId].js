import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { Cloudinary } from '@cloudinary/url-gen';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss'

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
});

export default function Product({ product, ogImage }) {
  return (
    <Layout>
      <Head>
        <title>{ product.name } - Space Jelly Gear</title>
        <meta name="description" content={`${product.name} on Space Jelly gear!`} />
        <meta property="og:title" content={`${product.name} - Space Jelly Gear`} />
        <meta property="og:description" content={`${product.name} on Space Jelly gear!`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
      </Head>

      <Container>
        <h1>{ product.name }</h1>

        <div className={styles.productImage}>
          <Image
            width="500"
            height="500"
            src={`/${product.publicId}`}
            alt=""
            layout="responsive"
          />
        </div>
        <h3 className={styles.productTitle}>
          { product.name }
        </h3>
        <p className={styles.productPrice}>
          ${ product.price }
        </p>
        <p>
          <Button>
            Add to Cart
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const product = products.find(({ id }) => params.productId === id)
  const ogImage = cld.image('images/product-social-media-card_l8thig')
                    .effect(`l_${product.publicId.replace(/\//g, ':')},c_fill,w_600,h_600`)
                    .addFlag('layer_apply,g_west')
                    .effect(`l_text:Source Sans Pro_48_bold:${product.name} ${product.name} ${product.name},c_fit,w_460`)
                      .effect(`l_text:Source Sans Pro_24_bold_:Only on Space Jelly Gear!,co_rgb:24292F,c_fit,w_460`)
                      .addFlag('layer_apply,y_h_add_5,g_west')
                    .addFlag('layer_apply,g_north_west,x_670,y_70')
                    .toURL();
  return {
    props: {
      product,
      ogImage
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(product => {
      return {
        params: {
          productId: product.id
        }
      }
    }),
    fallback: false
  }
}