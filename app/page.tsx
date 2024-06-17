import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.title1}>
          <div className={styles.head_title}>
            <div className={styles.title}>تعداد جایگاه پارکینگ </div>
            <div className={styles.detail}>10</div>
          </div>
          <div className={styles.main_title}>
            <div className={styles.parkon}>
              <div className={styles.titleparkon}>تعداد جایگاه در دسترس</div>
              <div className={styles.valueparkon}>10</div>
            </div>

            <div className={styles.parkoff}>
              <div className={styles.titleparkoff}>جایگاه های پر شده</div>
              <div className={styles.valueparkoff}>10</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.mainbox}>
              <div className={styles.row1}>
                <div id="box1" className={styles.boxcar}></div>
                <div id="box2" className={styles.boxcar}></div>
                <div id="box3" className={styles.boxcar}></div>
              </div>
              <div className={styles.row2}>
                <div id="box4" className={styles.boxcar}></div>
                <div id="box5" className={styles.boxcar}></div>
                <div id="box6" className={styles.boxcar}></div>
              </div>
              <div className={styles.row3}>
                <div id="box7" className={styles.boxcar}></div>
                <div id="box8" className={styles.boxcar}></div>
                <div id="box9" className={styles.boxcar}></div>
              </div>
            </div>
            <div className={styles.video}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
