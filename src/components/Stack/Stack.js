import styles from "./Stack.module.css";

export default function Stack({ children, spacing = "md", className = "" }) {
  return (
    <div className={`${styles.stack} ${styles[spacing]} ${className}`}>
      {children}
    </div>
  );
}
