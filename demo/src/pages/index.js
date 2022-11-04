import Head from 'next/head'
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss';

const FEATURED_PRODUCTS = [
  'cosmo-hat-model',
  'cosmo-hat',
  'cosmo-mousepad',
  'cosmo-tshirt-model',
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Space Jelly Gear</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <div className={styles.hero}>
          <Link href="#">
            <div className={styles.heroContent}>
              <h2>Prepare for liftoff.</h2>
              <p>Apparel that&apos;s out of this world!</p>
            </div>
            <CldImage
              className={styles.heroImage}
              width="2400"
              height="800"
              src="https://user-images.githubusercontent.com/1045274/199742478-515b9507-1c74-4c8a-a5e3-0918e6c7c2be.jpg"
              deliveryType="fetch"
              alt=""
              sizes="100vw"
            />
          </Link>
        </div>

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
          {FEATURED_PRODUCTS.map(productId => {
            const product = products.find(({ id }) => id === productId);
            const overlays = [];

            if ( product.sale > 0 ) {
              overlays.push({
                url: 'https://user-images.githubusercontent.com/1045274/199878003-6b54e65f-7d23-413d-a48d-5c88d74652e3.png',
                width: 350,
                height: 350,
                position: {
                  gravity: 'north_east',
                  x: 50,
                  y: 50,
                  angle: 15
                }
              });

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
            }

            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <div className={styles.productImage}>
                    <CldImage
                      width="600"
                      height="600"
                      crop="fill"
                      src={product.image}
                      deliveryType="fetch"
                      alt=""
                      sizes="(min-width: 480px ) 50vw,
                            (min-width: 728px) 33vw,
                            (min-width: 976px) 25vw,
                            100vw"
                      overlays={overlays}
                    />
                  </div>
                  <h3 className={styles.productTitle}>
                    { product.name }
                  </h3>
                  <p className={styles.productPrice}>
                    ${ product.price }
                  </p>
                </Link>
                <p>
                  <Button>
                    Add to Cart
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}