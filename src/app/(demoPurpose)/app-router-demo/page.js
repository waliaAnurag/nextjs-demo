"use client"
import AppStyles from '../../../styles/appHomeStyles.module.css';

const Home = () => {
  console.log("runningx")
    return (
      <main className={AppStyles.mainAppContainer}>
        <h1 className="text-5xl font-bold text-gray-900 leading-[1.4] mb-5">
          Mini Demo for App Router (Intro)
        </h1>
        <p className="text-2xl text-gray-700">
         Topics covered in this demo are :
          <li className={AppStyles.liStyles}>
          1.   App router navigation and difference from page router
          </li>
          <li className={AppStyles.liStyles}>
          2.   Layout in app router.
          </li>
          <li className={AppStyles.liStyles}>
          3.   Rendering in app router (intro)
          </li>
          <li className={AppStyles.liStyles}>
          4.   Server components and RSC
          </li>
         
          
        </p>
      </main>
    );
  };
  
  export default Home;
  