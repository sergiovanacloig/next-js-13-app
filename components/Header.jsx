import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {links.map(({ label, route }) => (
            <li key={route} className={styles.listItem}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
