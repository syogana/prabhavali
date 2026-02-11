import styles from "./Typography.module.css";

export function Heading1({ children, className = "" }) {
  return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
}

export function Heading2({ children, className = "" }) {
  return <h2 className={`${styles.h2} ${className}`}>{children}</h2>;
}

export function Heading3({ children, className = "" }) {
  return <h3 className={`${styles.h3} ${className}`}>{children}</h3>;
}

export function Heading4({ children, className = "" }) {
  return <h4 className={`${styles.h4} ${className}`}>{children}</h4>;
}

export function Paragraph({ children, className = "", size = "base" }) {
  return (
    <p className={`${styles.paragraph} ${styles[size]} ${className}`}>
      {children}
    </p>
  );
}

export function UnorderedList({ children, className = "", size = "base" }) {
  return (
    <ul className={`${styles.ul} ${styles[size]} ${className}`}>{children}</ul>
  );
}

export function Caption({ children, className = "" }) {
  return <p className={`${styles.caption} ${className}`}>{children}</p>;
}

export function Lead({ children, className = "" }) {
  return <p className={`${styles.lead} ${className}`}>{children}</p>;
}
