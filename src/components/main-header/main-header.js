import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import MainHeaderBackground from './main-header-background';
import styles from "./main-header.module.css";

export default function MainHeader() {
    return (
      <>
        <MainHeaderBackground />
        <header className={styles.header}>
          <Link className={styles.logo} href="/">
            <Image
              src={Logo}
              alt="A plate with food on it"
              priority
            />
            Next Level Food
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/meals">Browse Meals</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  );
}