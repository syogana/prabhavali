import styles from "./Hero.module.css";
import { HeroImage } from "@/components/ImageComponent/ImageComponent";

export default function Hero() {
  return (
    <section>
      <HeroImage src="/images/hero.png" alt="Featured artwork" />
    </section>
  );
}
