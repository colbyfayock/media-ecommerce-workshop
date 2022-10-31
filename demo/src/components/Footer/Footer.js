import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <Link href="/">Space Jelly Gear</Link>, {new Date().getFullYear()} &amp; Images via <a href="https://unsplash.com/">unsplash.com</a>
      </p>
    </footer>
  )
}

export default Footer;