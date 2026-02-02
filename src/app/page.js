import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero/Hero";
import Repertory from "@/components/Sections/Repertory/Repertory";
import ArtisticDirector from "@/components/Sections/ArtisticDirector/ArtisticDirector";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <section>
        <Repertory />
        <ArtisticDirector />
      </section>
    </main>
  );
}
