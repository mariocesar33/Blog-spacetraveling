import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  // TODO
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a className={styles.headerContent}>
          <img src="/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
