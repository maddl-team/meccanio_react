import { tickerItems } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroBackgroundVideo } from "@/components/home/HeroBackgroundVideo";
import styles from "./home.module.css";

function TickerRow({ hidden }: { hidden?: boolean }) {
  return (
    <span className={styles.tickerRow} aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <span key={item} className={styles.tickerItemWrap}>
          <span className={styles.tickerItem}>{item}</span>
          <span className={styles.tickerSlash}>/</span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <HeroBackgroundVideo />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={`${styles.kicker} ${styles.heroKicker}`}>
            Meccanio · Società di ingegneria italiana
          </p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Dalla meccanica
            <br />
            alla robotica
            <br />
            per la persona.
          </h1>
          <p className={styles.heroLead}>
            Oltre 25 anni di progettazione meccanica, macchine e automazione
            industriale. Oggi selezioniamo, integriamo e supportiamo tecnologie
            robotiche applicate al lavoro e alle capacità umane.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contatti" variant="hero">
              Richiedi una consulenza
            </Button>
            <Button href="#competenze" variant="heroGhost">
              Cosa facciamo
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          <TickerRow />
          <TickerRow hidden />
        </div>
      </div>
    </section>
  );
}
