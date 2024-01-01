import Link from "next/link";
import styles from "./Header.module.css";
import { cookies } from "next/headers";

export const Header = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/" scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/store" scroll={false}>
              Store
            </Link>
          </li>
        </ul>
        {token ? <p> Hola! </p> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};
