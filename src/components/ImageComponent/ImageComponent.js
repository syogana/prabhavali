import Image from "next/image";
import styles from "./ImageComponent.module.css";
import heroStyles from "../Sections/Hero/Hero.module.css";

// Hero image for large, impactful visuals
export function HeroImage({ src, alt, priority = true, className = "" }) {
  return (
    <div className={`${heroStyles.heroWrapper} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={styles.heroImage}
        priority={priority}
      />
    </div>
  );
}
