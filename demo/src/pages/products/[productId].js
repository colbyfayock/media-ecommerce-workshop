import Head from 'next/head'
import Link from 'next/link';
import { CldImage, CldOgImage } from 'next-cloudinary';

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
        <meta property="og:description" content={`${product.name} on Space Jelly gear!`} />
        <meta property="og:type" content="article" />
      </Head>

      <CldOgImage
        src="images/product-social-media-card_l8thig"
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
          },
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
          },
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
        twitterTitle={`${product.name} - Space Jelly Gear`}
      />

      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <CldImage
              width="500"
              height="500"
              src={product.image}
              alt=""
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
  const product = products.find(({ id }) => params.productId === id)

  return {
    props: {
      product
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