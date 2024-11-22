import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
            src="/Images/SHPE_logo_horiz_UTSA_PMS.jpg" // Path relative to `public`
            alt="SHPE Logo"
            width={500} // Specify width
            height={300} // Specify height
        />
       <h3>Upcoming Events</h3>
        <div className = {styles.UEvents}>
        
          <div className = {styles.eventBox}>
            <h>Event 1</h>
            <p>When</p>
            <p>Where</p>
            <p>time</p>
          </div>
          <div className =  {styles.eventBox}>
            <h>Event 2</h>
            <p>When</p>
            <p>Where</p>
            <p>time</p>
          </div>
          <div className =  {styles.eventBox1}>
            <h>Event 3</h>
            <p>When</p>
            <p>Where</p>
            <p>time</p>
          </div>
        </div>
        <div className = {styles.Exp}>
          <h>Experience at UTSA with SHPE</h>
          <p>Our chapter has made it a priority to support the academic, professional, and leadership growth of its members as well as raise awareness of science and engineering among the Hispanic community. We seek to offer opportunities that will help our members flourish not only as students but as professionals as well!</p>
        </div>
    </div>
  ) }

