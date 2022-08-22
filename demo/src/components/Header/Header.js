import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Space Jelly</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/colbyfayock/media-ecommerce-workshop-starter" target="_blank" rel="noreferrer">Starter</a>
          </li>
          <li>
            <a href="https://github.com/colbyfayock/media-ecommerce-workshop" target="_blank" rel="noreferrer">Source</a>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button>
            <FaShoppingCart />
            <span>
              $0.00
            </span>
          </button>
        </p>
      </Container>
    </header>
  )
}

export default Header;