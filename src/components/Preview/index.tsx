import Link from 'next/link';

import styles from './preview.module.scss';

export function Preview(): JSX.Element {
  return (
    <aside>
      <Link href="../../pages/api/exit-preview">
        <a className={styles.preview}>Sair do modo preview</a>
      </Link>
    </aside>
  );
}
