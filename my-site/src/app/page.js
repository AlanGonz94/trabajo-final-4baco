import Image from 'next/image'
import styles from "./page.module.css"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hola<span className={styles.yellowText}> B)</span>
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
      <section id="info" className={styles.infoSection}>
        <img
          src = "/spider-man-36.png"
          alt = "Imagen"
          className = {styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.greenText}>Alan</span>
          <br />
          <span className={styles.title}>Gonzalez</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Edad: </span> 16
              </li>
              <li>
                <span className={styles.grayText}>Nacionalidad: </span>Persa
              </li>
              <li>
                <span className={styles.grayText}>Habilidades: </span> Muchas
              </li>
              <li>
                <span className={styles.grayText}>Idiomas: </span> Español, Ingles, Kaqchikel, Peruano
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );   
}
