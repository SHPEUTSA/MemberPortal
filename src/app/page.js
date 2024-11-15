import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
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
    </div>
  ) }

