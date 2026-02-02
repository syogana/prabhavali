import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Prabhavali Logo"
            width={220}
            height={60}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
