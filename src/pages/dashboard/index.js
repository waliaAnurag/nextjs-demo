import React, { useEffect } from 'react'
import Head from 'next/head';
import styles from "../../styles/dashboard.module.css"
import pageStyles from "../../styles/page.module.css"
import ListItems from '@/component/listItems';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Dashboard(props) {

    const { bookList } = props;
    const router = useRouter();
    function redirectHandler(e, bookId) {
        e.preventDefault();
        router.push(`/dashboard/${bookId}`);
    }


    function redirectToInfoGrapics(e) {
        e.preventDefault();
        router.push(`/infographics`)
    }
    return (

        <div className={styles.dashboardHolder}>
            <Head>
                <title>Trending Books</title>
            </Head>
            <header>
                <div><Link href={"/"}> <button type='button' className={`${pageStyles.btn} ${styles.navigationLinkStyles}`}> Home</button></Link><center><h1>Trending Books Library</h1></center></div>
            </header>
            <main className={styles.mainContentSectionStyles}>
                <center>
                    <div className={styles.contentHolder}>
                        {bookList.map((item, index) => { return <ListItems key={index} bookInformation={item} redirect={redirectHandler} /> })}

                    </div>
                </center>
            </main>
            <footer>
                <button type='button' className={`${pageStyles.btn} ${styles.infoGraphicsCTA}`} onClick={redirectToInfoGrapics}>Next js infographics</button>
            </footer>

        </div>

    )
}

export default Dashboard

export async function getStaticProps() {
    let booksData = [];
    let response;
    try {

        response = await fetch(process.env.FIREBASE_URL);
        booksData = await response.json();
        
        if (booksData.length === 0) {
            return { notFound: true };
        }
        return {
            props: {
                bookList: booksData
            },
            revalidate: 5
        }
    } catch (err) {
        console.log(err)
        return { notFound: true }

    }



}
