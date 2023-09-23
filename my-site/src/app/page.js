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
            <span>Alan</span>
          </h1>
        </div>
      </header>
    </main>
  );   
}
