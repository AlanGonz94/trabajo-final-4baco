import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hola<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>Soy</span>
            </span>
            <br />
            <span>Alan Gonzalez</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img
          src = "/spider-man-36.png"
          alt = "Imagen"
          className = {styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.yellowText}>Alan</span>
          <br />
          <span className={styles.title}>Gonzalez</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span> 27
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span>German
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span> Project Management and Financial Performance
              </li>
              <li>
                <span className={styles.grayText}>Languages: </span> English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );   
}
