import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Product.module.scss'

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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
      </Head>

      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <Image
              width="500"
              height="500"
              src={`/${product.publicId}`}
              alt=""
              layout="responsive"
              sizes="(min-width: 1024px ) 50vw, 100vw"
            />
          </div>
          <div className={styles.productContent}>
            <h1>{ product.name }</h1>
            <p className={styles.productPrice}>
              ${ product.price }
            </p>
            <p className={styles.productBuy}>
              <Button>
                Add to Cart
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { v2: cloudinary} = await import('cloudinary');

  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  });

  const product = products.find(({ id }) => params.productId === id)

  const ogImage = cloudinary.url('images/product-social-media-card_l8thig', {
    width: 1200,
    height: 600,
    transformation: [
      {
        fetch_format: 'auto',
        quality: 'auto'
      },
      {
        overlay: product.publicId.replace(/\//g, ':'),
        crop: 'fill',
        width: 600,
        height: 600
      },
      {
        flags: 'layer_apply',
        gravity: 'west'
      },
      {
        overlay: {
          text: product.name,
          font_family: 'Source Sans Pro',
          font_size: 48,
          font_weight: 'bold'
        },
        crop: 'fit',
        width: 460
      },
        {
          overlay: {
            text: 'Only on Space Jelly Gear!',
            font_family: 'Source Sans Pro',
            font_size: 24,
            font_weight: 'bold'
          },
          color: '#24292F',
          crop: 'fit',
          width: 460
        },
        {
          flags: 'layer_apply',
          gravity: 'west',
          y: 'h + 15'
        },
      {
        flags: 'layer_apply',
        gravity: 'north_west',
        x: 670,
        y: 70
      }
    ]
  });

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