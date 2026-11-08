import SpeakerCard from "../SpeakerCard/SpeakerCard";
import { speakerBlocks } from "./speakersData";
import styles from "./Speakers.module.css";

const Speakers = () => {
  return (
    <section id="speakers" className={styles.section} aria-labelledby="keynotes-title">
      {speakerBlocks.map((block) => (
        <div key={block.id}>
          {block.dividerBefore && <div className={styles.divider} aria-hidden="true" />}
          <div className={`${styles.block} ${styles[block.variant]}`}>
            <div className="container">
              {block.title && <h2 id="keynotes-title" className={styles.title}>{block.title}</h2>}
              <ul className={styles.grid}>
                {block.speakers.map((speaker) => (
                  <li key={speaker.id} className={styles.item}>
                    <SpeakerCard speaker={speaker} variant={block.variant} monochrome={block.monochrome} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.bottomDivider} aria-hidden="true" />
    </section>
  );
};

export default Speakers;
