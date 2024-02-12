import React from 'react'
import Image from 'next/image'
import coverImage from '../asset/coverImage.jpg'
import styles from "../styles/page.module.css";
import { useRouter } from 'next/router';
import Head from 'next/head';
import dashboardStyles from "../styles/dashboard.module.css"
function LandingPage() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <div className={styles.mainContent}>
      <Head>
      <title>Trending Book Library</title>
    </Head>
      <div style={{ textAlign: "center" }}><h1> Trending Book Library </h1>  </div>
      <center>
        <Image
          src={coverImage}
          width={400}
          height={300}
          style={{ borderRadius: '50%',boxShadow:"3px 3px 5px 0px black"  }}
          alt="cover image"
        />
        <div>
          <div style={{ paddingTop: "20px" }}> See the top trending book information. Click Below to explore</div>
          <div style={{ paddingTop: "20px" }}>
            <button type='button' className={`${styles.btn} ${dashboardStyles.btnCustomStyles}`} onClick={handleClick}> Click to explore !</button>
          </div>
        </div>
      </center>
    </div>
  )
}

export default LandingPage
