import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { getImagePath } from "@/app/utils/paths";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={getImagePath("/images/logo.jpeg")}
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
